import utils from "../utils";
import stringValidator from "./stringValidator";

const { validation: strings } = utils.getLSLocale();

const nameValidator = (schema, field, min = 2, max = 50, required = true) => {
  const regex = required ? /^[آ-ی ]+$/ : /^[آ-ی ]*$/;
  return stringValidator(schema, field, min, max, required).matches(
    regex,
    strings.stringMessage.replace(":field", field)
  );
};

export default nameValidator;
