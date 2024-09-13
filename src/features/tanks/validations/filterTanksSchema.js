import * as yup from "yup";

import utils from "../../../utils";
import { stringValidator } from "../../../validations";

const { tanksPage: strings } = utils.getLSLocale();

const filterTanksSchema = yup.object().shape({
  filterTankNo: stringValidator(
    yup.string(),
    strings.filterTankNo,
    null,
    50,
    false
  ),
  filterTankOwner: stringValidator(
    yup.string(),
    strings.filterTankOwner,
    null,
    50,
    false
  ),
});

export default filterTanksSchema;
