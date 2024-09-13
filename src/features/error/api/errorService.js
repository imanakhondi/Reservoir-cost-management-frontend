import { ENV } from "../../../config";
import { post } from "../../../lib";

const store = async (error, errorInfo) => {
  return await post(`${ENV.apiEndpoint}/errors/store`, {
    error,
    error_info: errorInfo,
  });
};

const errorService = {
  store,
};

export default errorService;
