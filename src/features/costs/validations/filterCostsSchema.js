import * as yup from "yup";

import utils from "../../../utils";
import { stringValidator } from "../../../validations";

const { costsPage: strings } = utils.getLSLocale();

const filterCostsSchema = yup.object().shape({
  filterCostName: stringValidator(
    yup.string(),
    strings.filterCostName,
    null,
    50,
    false
  ),
  filterServiceName: stringValidator(
    yup.string(),
    strings.filterServiceName,
    null,
    50,
    false
  ),
});

export default filterCostsSchema;
