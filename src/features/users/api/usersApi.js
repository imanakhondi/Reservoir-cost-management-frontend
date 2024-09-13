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

export const addGroup = async (csvFile) => {
  let data = new FormData();
  data.append("csv_file", csvFile);

  return await postFile(`${ENV.apiEndpoint}/users/store/group`, data);
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
