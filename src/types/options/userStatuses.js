import utils from "../../utils";
import { USER_STATUSES } from "..";

const { userStatuses: strings } = utils.getLSLocale();

const userStatuses = [
  { value: USER_STATUSES.active, text: strings.active },
  { value: USER_STATUSES.deactive, text: strings.deactive },
];

export default userStatuses;
