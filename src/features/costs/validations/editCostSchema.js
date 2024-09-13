import * as yup from "yup";

import utils from "../../../utils";
import {
  nameValidator,
  dateValidator,
  numberValidator,
} from "../../../validations";

const { editCostPage: strings } = utils.getLSLocale();

const editCostSchema = yup.object().shape({
  // cost: numberValidator(yup, strings.cost),
  // costDate: dateValidator(yup.string(), strings.costDate)

});

export default editCostSchema;