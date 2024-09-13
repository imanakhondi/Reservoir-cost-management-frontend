import * as yup from "yup";

import utils from "../../../utils";
import { stringValidator } from "../../../validations";

const { servicesPage: strings } = utils.getLSLocale();

const filterUsersSchema = yup.object().shape({
  filterServiceName: stringValidator(
    yup.string(),
    strings.filterServiceName,
    null,
    50,
    false
  ),
});

export default filterUsersSchema;
