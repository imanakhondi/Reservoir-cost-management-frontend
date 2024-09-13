import * as yup from "yup";

import utils from "../../../utils";
import {  nameValidator } from "../../../validations";

const { addServicePage: strings } = utils.getLSLocale();

const addServiceSchema = yup.object().shape({
  serviceName: nameValidator(yup.string(), strings.serviceName)
});

export default addServiceSchema;
