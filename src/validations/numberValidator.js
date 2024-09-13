import utils from "../utils";

const { validation: strings } = utils.getLSLocale();

const numberValidator = (
  schema,
  field,
  min = null,
  max = null,
  required = true,
  customMinMessage = null,
  customMaxMessage = null
) => {
  schema = schema
    .number()
    .typeError(strings.numberMessage.replace(":field", field))
    .transform((_, val) => (val !== "" ? Number(val) : null));
  if (!required) {
    schema = schema.nullable();
  } else {
    schema = schema.nonNullable(
      strings.requiredMessage.replace(":field", field)
    );
  }
  if (min) {
    schema = schema.min(
      min,
      customMinMessage ??
        strings.minNumberMessage.replace(":field", field).replace(":min", min)
    );
  }
  if (max) {
    schema = schema.max(
      max,
      customMaxMessage ??
        strings.maxNumberMessage.replace(":field", field).replace(":max", max)
    );
  }

  return schema;
};

export default numberValidator;
