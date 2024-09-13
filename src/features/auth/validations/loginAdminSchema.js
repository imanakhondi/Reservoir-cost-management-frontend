import * as yup from "yup";

import utils from "../../../utils";
import { stringValidator } from "../../../validations";

const { loginAdminPage: strings } = utils.getLSLocale();

const loginAdminSchema = yup.object().shape({
  username: stringValidator(yup.string(), strings.username, 5, 50),
  password: stringValidator(yup.string(), strings.password, 5, 50),
});

export default loginAdminSchema;
