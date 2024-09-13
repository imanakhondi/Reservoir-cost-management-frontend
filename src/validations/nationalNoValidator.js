import utils from "../utils";

const { validation: strings } = utils.getLSLocale();

const nationalNoValidator = (schema, field, required = true) => {
  if (required) {
    schema = schema.matches(
      /^([0][0-9]{9})|([1-9][0-9]{9})+$/,
      strings.validMessage.replace(":field", field)
    );
    schema = schema.required(strings.requiredMessage.replace(":field", field));
  } else {
    schema = schema.matches(
      /^([0][0-9]{9})|([1-9][0-9]{9})*$/,
      strings.validMessage.replace(":field", field)
    );
  }
  return schema;
};

export default nationalNoValidator;
