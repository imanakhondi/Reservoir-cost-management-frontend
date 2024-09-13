import { ENV } from "../../../config";
import { post, postFile } from "../../../lib";

export const add = async (
  tankOwner,
  tankName,
  oilTestExpiryDate,
  rahaneTestExpiryDate,
  capotageExpiryDate
) => {
  return await post(`${ENV.apiEndpoint}/tanks/store`, {
    tankOwner,
    tankName,
    oilTestExpiryDate,
    rahaneTestExpiryDate,
    capotageExpiryDate,
  });
};

export const search = async (tankOwner, tankName, pageNo, pageItems) => {
  return await post(`${ENV.apiEndpoint}/tanks`, {
    tankOwner,
    tankName,
    _pn: pageNo,
    _pi: pageItems,
  });
};

export const searchWithProps = async () => {
  return await post(`${ENV.apiEndpoint}/tanks/props`);
};
