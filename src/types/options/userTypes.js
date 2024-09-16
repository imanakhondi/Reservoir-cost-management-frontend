import utils from "../../utils";
import { USER_TYPES } from "../";

const { userTypes: strings } = utils.getLSLocale();

const userTypes = [
  { value: USER_TYPES.operator, text: strings.operator },
  { value: USER_TYPES.administrator, text: strings.administrator },
  { value: USER_TYPES.internalManager, text: strings.internalManager },
  { value: USER_TYPES.merchant, text: strings.merchant },
  { value: USER_TYPES.financial, text: strings.financial },
];

export default userTypes;
