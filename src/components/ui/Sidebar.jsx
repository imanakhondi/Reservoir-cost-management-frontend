import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Svg, { SvgPath } from "../svg";
import utils from "../../utils";
import { PAGES } from "../../types";
import { logoutAction } from "../../stores/admin/adminActions";

const Sidebar = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const adminState = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();
  const { sidebar: strings } = utils.getLSLocale();

  const renderMenuItemLink = (page, SvgComponent, label, link) => (
    <li>
      <Link
        to={link}
        className={`flex flex-row items-center gap-4 menu-item menu-link ${
          page === pageState?.page ? "selected" : ""
        }`}
      >
        <Svg
          SvgPath={<SvgComponent />}
          width="24"
          height="24"
          className="icon-complex mr-5"
        />
        <span className={`inline flex-1`}>{label}</span>
      </Link>
    </li>
  );

  const logout = () => {
    dispatch(logoutAction());
    window.location.href = `/admins/login`;
  };

  if (!pageState?.page) {
    return;
  }

  const renderAdminMenus = () => (
    <ul>
      {renderMenuItemLink(
        PAGES.Dashboard,
        SvgPath.SvgDashboard,
        strings.dashboard,
        "/"
      )}
      {renderMenuItemLink(
        PAGES.Users,
        SvgPath.SvgUsers,
        strings.users,
        "/users"
      )}
      {renderMenuItemLink(
        PAGES.Tanks,
        SvgPath.SvgPromotion,
        strings.tanks,
        "/tanks"
      )}
      {renderMenuItemLink(
        PAGES.Services,
        SvgPath.SvgWorkingGroup,
        strings.services,
        "/services"
      )}
      {renderMenuItemLink(
        PAGES.Costs,
        SvgPath.SvgWorkingGroup,
        strings.costs,
        "/costs"
      )}
    </ul>
  );

  const renderOperatorMenus = () => (
    <ul>
      {renderMenuItemLink(
        PAGES.Dashboard,
        SvgPath.SvgDashboard,
        strings.dashboard,
        "/"
      )}
      {renderMenuItemLink(
        PAGES.Costs,
        SvgPath.SvgWorkingGroup,
        strings.costs,
        "/costs"
      )}
    </ul>
  );

  const renderInternalManagerMenus = () => (
    <ul>
      {renderMenuItemLink(
        PAGES.Dashboard,
        SvgPath.SvgDashboard,
        strings.dashboard,
        "/"
      )}
      {renderMenuItemLink(
        PAGES.Users,
        SvgPath.SvgUsers,
        strings.users,
        "/users"
      )}
      {renderMenuItemLink(
        PAGES.Tanks,
        SvgPath.SvgPromotion,
        strings.tanks,
        "/tanks"
      )}
      {renderMenuItemLink(
        PAGES.Services,
        SvgPath.SvgWorkingGroup,
        strings.services,
        "/services"
      )}
    </ul>
  );

  const renderFinancialMenus = () => (
    <ul>
      {renderMenuItemLink(
        PAGES.Dashboard,
        SvgPath.SvgDashboard,
        strings.dashboard,
        "/"
      )}
      {renderMenuItemLink(
        PAGES.Costs,
        SvgPath.SvgWorkingGroup,
        strings.costs,
        "/costs"
      )}
    </ul>
  );

  const renderMerchantMenus = () => (
    <ul>
      {renderMenuItemLink(
        PAGES.Dashboard,
        SvgPath.SvgDashboard,
        strings.dashboard,
        "/"
      )}
      {renderMenuItemLink(
        PAGES.Costs,
        SvgPath.SvgWorkingGroup,
        strings.costs,
        "/costs"
      )}
    </ul>
  );

  return (
    <div className="sidebar hidden md:flex flex-col w-72 bg-white">
      <div className="menu-container py-4 pr-0 pl-4 flex flex-col flex-1 justify-between max-h-screen">
        {adminState?.admin && renderAdminMenus()}
        {adminState?.operator && renderOperatorMenus()}
        {adminState?.internalManager && renderInternalManagerMenus()}
        {adminState?.financial && renderFinancialMenus()}
        {adminState?.merchant && renderMerchantMenus()}
        <ul>
          {/* {renderMenuItemLink(
            null,
            SvgPath.SvgSettings,
            strings.networkSettings,
            "/"
          )} */}
          <li
            className="flex flex-row items-center gap-4 menu-item last"
            onClick={logout}
          >
            <Svg
              SvgPath={<SvgPath.SvgLogout />}
              width="24"
              height="24"
              className="icon-complex mr-5"
            />
            <span className={`inline flex-1`}>{strings.logout}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
