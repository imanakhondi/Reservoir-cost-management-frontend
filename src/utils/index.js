import CryptoJS from "crypto-js";

import { ENV } from "../config";
import { LOCALES } from "../types/locales";
import { fa } from "../types/lang";
import { setLoadingAction } from "../stores/layout/layoutActions";
import {
  clearMessageAction,
  setMessageAction,
} from "../stores/message/messageActions";
import { MESSAGE_TYPES } from "../types/messageTypes";
import { getToken, messaging } from "../firebase.js";

const isJsonString = (str) => {
  try {
    str = JSON.stringify(str);
    str = str
      .replace(/\\n/g, "\\n")
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");
    str = str.replace(/[\u0000-\u0019]+/g, "");
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const initLocale = () => {
  const locale = getLSVariable("locale");

  if (![LOCALES.FA].includes(locale)) {
    setLSVariable("locale", LOCALES.FA);
  }

  return getLSVariable("locale");
};

function parseJwt(token) {
  try {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

function clearLS() {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
  localStorage.removeItem("locale");
}

const getLSVariable = (key) => {
  try {
    const text = localStorage.getItem(key);

    if (!text) {
      return null;
    }

    const bytes = CryptoJS.AES.decrypt(text, ENV.name);
    const value = bytes.toString(CryptoJS.enc.Utf8);

    return value;
  } catch (error) {
    return null;
  }
};

const setLSVariable = (key, value) => {
  try {
    const text = CryptoJS.AES.encrypt(value, ENV.name).toString();
    localStorage.setItem(key, text);
  } catch (error) {}
};

const getLSToken = () => {
  const token = getLSVariable("token");

  if (!token) {
    clearLS();

    return null;
  }

  const decodedToken = parseJwt(token);

  if (!decodedToken) {
    clearLS();

    return null;
  }

  return token;
};

const getLSAdmin = () => {
  let admin = getLSVariable("admin");

  if (!admin) {
    clearLS();

    return null;
  }

  try {
    admin = JSON.parse(admin);
  } catch {
    clearLS();

    return null;
  }

  return admin;
};

const getLSLocale = () => {
  const locale = getLSVariable("locale");

  switch (locale) {
    case LOCALES.FA:
      return fa;
    default:
      return fa;
  }
};

const postWithLoading = async (dispatch, promise) => {
  dispatch(clearMessageAction());
  dispatch(setLoadingAction(true));
  const response = await promise;
  dispatch(setLoadingAction(false));

  return response;
};

const setMessageError = (dispatch, response) => {
  try {
    dispatch(
      setMessageAction(
        response.resultMessage,
        MESSAGE_TYPES.ERROR,
        response.resultCode,
        true,
        response.resultData?.key
      )
    );
  } catch {}
};

const en2faDigits = (s) =>
  s
    ?.toString()
    .replace(/[0-9]/g, (w) => String.fromCharCode(w.charCodeAt(0) + 1728)) ??
  "";

const fa2enDigits = (num) => {
  if (num === null || num === undefined) {
    return null;
  }

  if (typeof num !== "string" || num.length === 0) {
    return num.toString();
  }

  let faDigits = "۰۱۲۳۴۵۶۷۸۹";
  let arDigits = "٠١٢٣٤٥٦٧٨٩";
  let output = "";

  for (let ipos = 0; ipos < num.length; ipos++) {
    let faIndex = faDigits.indexOf(num[ipos]);

    if (faIndex >= 0) {
      output += faIndex.toString();
      continue;
    }

    let arIndex = arDigits.indexOf(num[ipos]);

    if (arIndex >= 0) {
      output += arIndex.toString();
      continue;
    }

    output += num[ipos];
  }

  return output.replace(/,/g, "");
};

const localeDigits = (s) => {
  const locale = getLSVariable("locale");

  if (locale === "fa") {
    return en2faDigits(s);
  }

  return s;
};

const getExtension = (filename) => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

export const requestFCMPermissionAndToken = async (setCurrentToken) => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      await getFCMToken(setCurrentToken);
    } else {
      console.log("Permission to notify was denied.");
    }
  } catch (error) {
    console.error("Error during permission request:", error);
  }
};

const getFCMToken = async (setCurrentToken) => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        "BBV9hpaiaxnDWzA_7GO5jlWYqn0wNrZUp-npzoOGTK2_VnMbITJBYoayuIiWe99azQ5Uehy-S7fPqVqaCMmJ4UU",
    });

    if (token) {
      setCurrentToken(token);
      console.log("FCM Token:", token);
    } else {
      console.log("No registration token available.");
    }
  } catch (error) {
    console.error("Error retrieving FCM token:", error);
  }
};

const utils = {
  isJsonString,
  initLocale,
  clearLS,
  getLSVariable,
  setLSVariable,
  getLSToken,
  getLSAdmin,
  getLSLocale,
  postWithLoading,
  setMessageError,
  en2faDigits,
  fa2enDigits,
  localeDigits,
  getExtension,
  requestFCMPermissionAndToken,
};

export default utils;
