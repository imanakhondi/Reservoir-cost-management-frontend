import utils from "../utils";

const { validation: strings } = utils.getLSLocale();

const telValidator = (schema, field, required = true) => {
  schema = schema.matches(
    /^([0][1-9][0-9]{9})+$/,
    strings.notValidMessage.replace(":field", field)
  );
  if (required) {
    schema = schema.required(strings.requiredMessage.replace(":field", field));
  }
  return schema;
};

export default telValidator;
