import * as yup from "yup";

import utils from "../../../utils";
import { dateValidator, numberValidator } from "../../../validations";

const { addTankPage: strings } = utils.getLSLocale();

const addTankSchema = yup.object().shape({
  tankNo: numberValidator(yup, strings.tankNo),
  oilTestExpiryDate: dateValidator(yup.string(), strings.oilTestExpiryDate),
  rahaneTestExpiryDate: dateValidator(
    yup.string(),
    strings.rahaneTestExpiryDate
  ),
});

export default addTankSchema;
