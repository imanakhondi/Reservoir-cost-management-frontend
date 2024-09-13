import { ENV } from "../../../config";
import { post, postFile } from "../../../lib";

export const add = async (
  serviceName,
  serviceDescription
) => {
  return await post(`${ENV.apiEndpoint}/services/store`, {
    serviceName,
    serviceDescription
  });
};



export const search = async (
  serviceName,
  pageNo,
  pageItems
) => {
  return await post(`${ENV.apiEndpoint}/services`, {
    serviceName,
    _pn: pageNo,
    _pi: pageItems,
  });
};

export const searchWithProps = async () => {
  return await post(`${ENV.apiEndpoint}/services/props`);
};
