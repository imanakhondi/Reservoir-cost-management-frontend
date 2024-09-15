import { ENV } from "../../../config";
import { post } from "../../../lib";

export const add = async (serviceName, serviceDescription) => {
  return await post(`${ENV.apiEndpoint}/services/store`, {
    serviceName,
    serviceDescription,
  });
};

export const edit = async (id, serviceName, serviceDescription) => {
  await post(`${ENV.apiEndpoint}/services/edit/${id}`, {
    serviceName,
    serviceDescription,
  });
};

export const deleteService  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/services/delete/${id}`);
};

export const getServiceById  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/services/${id}`);
};

export const search = async (serviceName, pageNo, pageItems) => {
  return await post(`${ENV.apiEndpoint}/services`, {
    serviceName,
    _pn: pageNo,
    _pi: pageItems,
  });
};

export const searchWithProps = async () => {
  return await post(`${ENV.apiEndpoint}/services/props`);
};
