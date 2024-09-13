import utils from "../../utils";
import { PAGE_ITEMS } from "..";

const { pageItems: strings } = utils.getLSLocale();

const pageItems = [
  { value: PAGE_ITEMS.ITEMS_10, text: strings.items10 },
  { value: PAGE_ITEMS.ITEMS_20, text: strings.items20 },
  { value: PAGE_ITEMS.ITEMS_50, text: strings.items50 },
];

export default pageItems;
