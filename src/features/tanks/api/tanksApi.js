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

export const edit = async (
  id,
  tankOwner,
  tankName,
  oilTestExpiryDate,
  rahaneTestExpiryDate,
  capotageExpiryDate
) => {
  

  return await postFile(`${ENV.apiEndpoint}/tanks/edit/${id}`, {
    tankOwner,
    tankName,
    oilTestExpiryDate,
    rahaneTestExpiryDate,
    capotageExpiryDate,
  });
};

export const deleteTank  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/tanks/delete/${id}`);
};

export const getTankById  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/tanks/${id}`);
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
