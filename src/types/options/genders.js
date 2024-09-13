import utils from "../../utils";
import { GENDERS } from "..";

const { genders: strings } = utils.getLSLocale();

const genders = [
  { value: GENDERS.male, text: strings.male },
  { value: GENDERS.female, text: strings.female },
];

export default genders;
