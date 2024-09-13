import * as yup from "yup";

import utils from "../../../utils";
import { dateValidator, stringValidator } from "../../../validations";

const { usersPage: strings } = utils.getLSLocale();

const filterUsersSchema = yup.object().shape({
  filterName: stringValidator(
    yup.string(),
    strings.filterName,
    null,
    50,
    false
  ),
  filterUsername: stringValidator(
    yup.string(),
    strings.filterUsername,
    null,
    50,
    false
  ),
  filterMobile: stringValidator(
    yup.string(),
    strings.filterMobile,
    null,
    11,
    false
  ),
  filterUserCreated: dateValidator(
    yup.string(),
    strings.filterCreatedAt,
    false
  ),
  filterBirthDate: dateValidator(yup.string(), strings.filterBirthDate, false),
});

export default filterUsersSchema;
