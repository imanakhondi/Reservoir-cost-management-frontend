import utils from "../utils";
import stringValidator from "./stringValidator";

const { validation: strings } = utils.getLSLocale();

const asciiValidator = (schema, field, min = 2, max = 50, required = true) => {
  const regex = required ? /^[a-zA-Z ]+$/ : /^[a-zA-Z ]*$/;
  return stringValidator(schema, field, min, max, required).matches(
    regex,
    strings.asciiStringMessage.replace(":field", field)
  );
};

export default asciiValidator;
