import { useSelector } from "react-redux";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { PAGES } from "../../../types";

const useDashboardPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const { dashboardPage: strings } = utils.getLSLocale();

  usePage(PAGES.Dashboard);

  return { strings, pageState };
};

export default useDashboardPageService;
