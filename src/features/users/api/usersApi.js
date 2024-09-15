import { ENV } from "../../../config";
import { post, postFile } from "../../../lib";

export const add = async (
  mobile,
  name,
  username,
  permissions,
  email,
  userType
) => {
  return await post(`${ENV.apiEndpoint}/users/store`, {
    mobile,
    name,
    username,
    permissions,
    email,
    type: userType,
  });
};

export const edit = async (
  id,
  mobile,
  name,
  username,
  permissions,
  email,
  userType
) => {
  return await post(`${ENV.apiEndpoint}/users/edit/${id}`, {
    mobile,
    name,
    username,
    permissions,
    email,
    type: userType,
  });
};

export const deleteUser  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/users/delete/${id}`);
};

export const getUserById  = async (id) => { 
  return await post(`${ENV.apiEndpoint}/users/${id}`);
};

export const search = async (
  name,
  username,
  mobile,
  status,
  createdAt,
  birthDate,
  gender,
  jobTitle,
  province,
  city,
  skills,
  pageNo,
  pageItems
) => {
  return await post(`${ENV.apiEndpoint}/users`, {
    name,
    username,
    mobile,
    status,
    create_at: createdAt,
    birth_date: birthDate,
    gender,
    job_title: jobTitle,
    province,
    city,
    skills,
    _pn: pageNo,
    _pi: pageItems,
  });
};

export const searchWithProps = async () => {
  return await post(`${ENV.apiEndpoint}/users/props`);
};
