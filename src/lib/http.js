import axios from "axios";

import { API_RESPONSE_CODES } from "../types";
import utils from "../utils";
import { general } from "../types/lang/fa";

axios.defaults.withCredentials = true;

const createConfig = () => {
  const token = utils.getLSToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  return config;
};

const createFileConfig = () => {
  const token = utils.getLSToken();
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  };

  return config;
};

const createErrorResponse = (code, message, data = null) => {
  return {
    result: "0",
    resultCode: code,
    resultMessage: message,
    resultData: data,
  };
};

const handlePost = async (url, data = null, withToken = true) => {
  return await axios.post(url, data, withToken ? createConfig() : null);
};

const handlePostFile = async (url, data = null) => {
  return await axios.post(url, data, createFileConfig());
};

const handleResponse = (response) => {
  try {
    if (!utils.isJsonString(response) || !utils.isJsonString(response.data)) {
      return createErrorResponse(API_RESPONSE_CODES.RESPONSE_INVALID, "");
    }

    if (response.data.result !== "1") {
      navigateIfTokenExpired(response.data.resultCode);

      return createErrorResponse(
        response.data.resultCode,
        response.data.resultMessage,
        response.data.resultData
      );
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return createErrorResponse(API_RESPONSE_CODES.CLIENT_ERROR, error.message);
  }
};

const handleError = (error) => {
  try {
    if (error.message === "Network Error") {
      return createErrorResponse(
        API_RESPONSE_CODES.CLIENT_ERROR,
        general.networkError
      );
    }

    return createErrorResponse(API_RESPONSE_CODES.CLIENT_ERROR, error.message);
  } catch {}

  return createErrorResponse(
    API_RESPONSE_CODES.CLIENT_ERROR,
    general.unknownError
  );
};

const navigateIfTokenExpired = (resultCode) => {
  if (
    resultCode === API_RESPONSE_CODES.ADMIN_NOT_FOUND ||
    resultCode === API_RESPONSE_CODES.ADMIN_NOT_AUTHORIZED
  ) {
    logout();
    setTimeout(() => {
      window.location.href = `/admins/login`;
    }, 2000);
  }
};

const logout = () => {
  try {
    utils.clearLS();
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url, data = {}) => {
  try {
    const response = await handlePost(url, data);

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const postWithoutToken = async (url, data = {}) => {
  try {
    const response = await handlePost(url, data, false);

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const postFile = async (url, data = {}) => {
  try {
    const response = await handlePostFile(url, data);

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
