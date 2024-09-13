import { ENV } from "../../../config";
import { postWithoutToken } from "../../../lib/http";

export const login = async (username, password) => {
  return await postWithoutToken(`${ENV.apiEndpoint}/admins/login`, {
    username,
    password,
  });
};
