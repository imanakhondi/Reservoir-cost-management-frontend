import * as yup from "yup";

import utils from "../../../utils";
import {
  nameValidator,
  dateValidator,
  numberValidator,
} from "../../../validations";

const { addCostPage: strings } = utils.getLSLocale();

const addCostSchema = yup.object().shape({
  // cost: numberValidator(yup, strings.cost),
  // costDate: dateValidator(yup.string(), strings.costDate)

});

export default addCostSchema;