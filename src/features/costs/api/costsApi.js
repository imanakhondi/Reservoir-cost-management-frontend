import { ENV } from "../../../config";
import { post, postFile } from "../../../lib";

export const add = async (
  tankOwner,
  tankNo,
  serviceType,
  costDescription,
  uploadDoc
) => {
  const formData = new FormData();

  formData.append("tankOwner", tankOwner);
  formData.append("tankNo", tankNo);
  formData.append("serviceType", serviceType);
  formData.append("costDescription", costDescription);

  if (uploadDoc) {
    formData.append("uploadDoc", uploadDoc);
  }

  return await postFile(`${ENV.apiEndpoint}/costs/store`, formData);
};

export const edit = async (
  id,
  tankOwner,
  tankNo,
  serviceType,
  costDescription,
  uploadDoc
) => {
  const formData = new FormData();

  formData.append("tankOwner", tankOwner);
  formData.append("tankNo", tankNo);
  formData.append("serviceType", serviceType);
  formData.append("costDescription", costDescription);

  if (uploadDoc) {
    formData.append("uploadDoc", uploadDoc);
  }

  return await postFile(`${ENV.apiEndpoint}/costs/edit/${id}`, formData);
};

export const update = async (
  id,
  tankOwner,
  tankNo,
  serviceType,
  costDescription,
  cost,
  costDate,
  uploadDoc
) => {
  const formData = new FormData();

  formData.append("tankOwner", tankOwner);
  formData.append("tankNo", tankNo);
  formData.append("serviceType", serviceType);
  formData.append("costDescription", costDescription);
  formData.append("cost", cost);
  formData.append("costDate", costDate);

  if (uploadDoc) {
    formData.append("uploadDoc", uploadDoc);
  }

  return await postFile(`${ENV.apiEndpoint}/costs/update/${id}`, formData);
};

export const deleteCost  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/costs/delete/${id}`);
};

export const getCostById  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/costs/${id}`);
};

export const search = async (tankOwner, tankNo, pageNo, pageItems) => {
  return await post(`${ENV.apiEndpoint}/costs`, {
    tankOwner,
    tankNo,
    _pn: pageNo,
    _pi: pageItems,
  });
};

export const searchWithProps = async () => {
  return await post(`${ENV.apiEndpoint}/costs/props`);
};
