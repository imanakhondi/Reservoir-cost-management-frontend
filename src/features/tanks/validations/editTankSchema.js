import * as yup from "yup";

import utils from "../../../utils";
import { dateValidator, numberValidator } from "../../../validations";

const { editTankPage: strings } = utils.getLSLocale();

const editTankSchema = yup.object().shape({
  tankNo: numberValidator(yup, strings.tankNo),
  oilTestExpiryDate: dateValidator(yup.string(), strings.oilTestExpiryDate),
  rahaneTestExpiryDate: dateValidator(
    yup.string(),
    strings.rahaneTestExpiryDate
  ),
});

export default editTankSchema;
