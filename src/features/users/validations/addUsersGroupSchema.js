import * as yup from "yup";

import utils from "../../../utils";
import { fileValidator } from "../../../validations";

const { addUsersGroupPage: strings } = utils.getLSLocale();

const addUsersGroupSchema = yup.object().shape({
  csvFile: fileValidator(yup.mixed(), strings.csvFile, 1024 * 1024, [
    "csv",
    "xls",
    "xlsx",
  ]),
});

export default addUsersGroupSchema;
