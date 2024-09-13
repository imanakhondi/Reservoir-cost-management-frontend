import * as yup from "yup";

import utils from "../../../utils";
import {
  stringValidator,
  emailValidator,
  mobileValidator,
  nameValidator,
} from "../../../validations";

const { addUserPage: strings } = utils.getLSLocale();

const addUserSchema = yup.object().shape({
  mobile: mobileValidator(yup.string(), strings.mobile),
  nameFamily: nameValidator(yup.string(), strings.nameFamily),
  username: stringValidator(yup.string(), strings.username, 5, 50),
  email: emailValidator(yup.string(), strings.email, false),
});

export default addUserSchema;
