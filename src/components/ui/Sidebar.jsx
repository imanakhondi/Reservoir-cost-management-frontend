import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import Svg, { SvgPath } from "../svg";
import utils from "../../utils";
import { PAGES } from "../../types";
import { logoutAction } from "../../stores/admin/adminActions";

const Sidebar = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { sidebar: strings } = utils.getLSLocale();

  useEffect(() => {
    if (!pageState?.page) {
      return;
    }

    const elements = document.querySelectorAll(".arrow-up");

    if (elements.length > 0) {
      slideMenuDown(elements[0].parentElement);
    } else {
      [...document.querySelectorAll(".expanded")].forEach((element) => {
        slideMenuUp(element.previousSibling);
      });
    }
  }, [pageState?.page]);

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

  const renderMenuItemDropdown = (pages, SvgComponent, label) => {
    return (
      <li
        className={`flex flex-row items-center gap-4 menu-item dropdown ${
          pages.includes(pageState?.page) ? "selected" : ""
        }`}
        onClick={(e) => toggleDropdown(e)}
      >
        <Svg
          SvgPath={<SvgComponent />}
          width="24"
          height="24"
          className="icon-complex mr-5"
        />
        <span className={`inline flex-1`}>{label}</span>
        <Svg
          SvgPath={<SvgPath.SvgChevronDown />}
          width="24"
          height="24"
          className={`icon${
            pages.includes(pageState?.page) ? " arrow-up" : ""
          }`}
        />
      </li>
    );
  };

  const renderSubMenuItem = (pages, label, link) => (
    <li>
      <Link
        to={link}
        className={`flex flex-row items-center gap-4 menu-item menu-link ${
          pages.includes(pageState?.page) ? "selected" : ""
        }`}
      >
        <div
          style={{ width: "24px" }}
          className="flex flex-row justify-center mr-5"
        >
          <Svg
            SvgPath={
              <SvgPath.SvgVerticalLine
                width="3"
                height="16"
                pathClassName={"fill-subline"}
              />
            }
            width="3"
            height="16"
            viewBox="0 0 3 16"
          />
        </div>
        <span className={`inline flex-1`}>{label}</span>
      </Link>
    </li>
  );

  const toggleDropdown = (e) => {
    e.stopPropagation();

    if (e.target.nextSibling.classList.contains("expanded")) {
      slideMenuUp(e.target);
    } else {
      slideMenuDown(e.target);
    }
  };

  const slideMenuUp = (element) => {
    element.lastChild.classList.remove("arrow-up");
    element.nextSibling.classList.remove("expanded");
    slideUp(element.nextSibling, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const slideMenuDown = (element) => {
    element.lastChild.classList.add("arrow-up");
    element.nextSibling.classList.add("expanded");
    slideDown(element.nextSibling, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const logout = () => {
    dispatch(logoutAction());
    window.location.href = `/admins/login`;
  };

  if (!pageState?.page) {
    return;
  }

  const adminState = {
    admin: true,
    // operator: true,
    // internalManager: true,
  };

  const renderAuthenticatedMenus = () => (
    <ul>
      {renderMenuItemLink(
        PAGES.Dashboard,
        SvgPath.SvgDashboard,
        strings.dashboard,
        "/"
      )}
      {renderMenuItemDropdown(
        [PAGES.Users, PAGES.AddUser],
        SvgPath.SvgUsers,
        strings.users
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Users, PAGES.AddUser],
            strings.usersManagement,
            `/users`
          )}
        </ul>
      </li>
      {renderMenuItemDropdown(
        [PAGES.Tanks, PAGES.AddTank],
        SvgPath.SvgPromotion,
        strings.tanks
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Tanks, PAGES.AddTank],
            strings.tanksManagement,
            `/tanks`
          )}
        </ul>
      </li>
      {renderMenuItemDropdown(
        [PAGES.Services, PAGES.AddService],
        SvgPath.SvgWorkingGroup,
        strings.services
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Services, PAGES.AddService],
            strings.servicesManagement,
            `/services`
          )}
        </ul>
      </li>
      {renderMenuItemDropdown(
        [PAGES.Costs, PAGES.AddCost],
        SvgPath.SvgWorkingGroup,
        strings.costs
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Costs, PAGES.AddCost],
            strings.costsManagement,
            `/costs`
          )}
        </ul>
      </li>
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
      {renderMenuItemDropdown(
        [PAGES.Costs, PAGES.AddCost],
        SvgPath.SvgWorkingGroup,
        strings.costs
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Costs, PAGES.AddCost],
            strings.costsManagement,
            `/costs`
          )}
        </ul>
      </li>
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
      {renderMenuItemDropdown(
        [PAGES.Users, PAGES.AddUser],
        SvgPath.SvgUsers,
        strings.users
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Users, PAGES.AddUser],
            strings.usersManagement,
            `/users`
          )}
        </ul>
      </li>
      {renderMenuItemDropdown(
        [PAGES.Tanks, PAGES.AddTank],
        SvgPath.SvgPromotion,
        strings.tanks
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Tanks, PAGES.AddTank],
            strings.tanksManagement,
            `/tanks`
          )}
        </ul>
      </li>
      {renderMenuItemDropdown(
        [PAGES.Services, PAGES.AddService],
        SvgPath.SvgWorkingGroup,
        strings.services
      )}
      <li className="sub-menu">
        <ul>
          {renderSubMenuItem(
            [PAGES.Services, PAGES.AddService],
            strings.servicesManagement,
            `/services`
          )}
        </ul>
      </li>
    </ul>
  );

  return (
    <div className="sidebar flex flex-col w-72 bg-white">
      <div className="menu-container py-4 pr-0 pl-4 flex flex-col flex-1 justify-between max-h-screen">
        {adminState?.admin && renderAuthenticatedMenus()}
        {adminState?.operator && renderOperatorMenus()}
        {adminState?.internalManager && renderInternalManagerMenus()}
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
