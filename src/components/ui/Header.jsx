import React from "react";
import { useDispatch, useSelector } from "react-redux";

import utils from "../../utils";
import Svg, { SvgPath } from "../svg";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";
import { setDropDownElementAction } from "../../stores/layout/layoutActions";

const Header = () => {
  const dispatch = useDispatch();
  const layoutState = useSelector((state) => state.layoutReducer);
  const { header: strings } = utils.getLSLocale();

  const toggleAccountDropdown = (e) => {
    e.stopPropagation();
    const element = document.querySelector("#account-menu").lastChild;

    if (layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);

      if (layoutState?.dropDownElement === element) {
        document
          .querySelector("#account-drop-icon")
          .classList.remove("arrow-up");
        dispatch(setDropDownElementAction(null));

        return;
      }
    }

    document.querySelector("#account-drop-icon").classList.add("arrow-up");
    dispatch(setDropDownElementAction(element));
    slideDown(element, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  return (
    <div className="header flex flex-row justify-center px-3 py-2 bg-white z-50">
      <div className="flex flex-row flex-1 gap-3">
        {/* <div className="logo w-12 h-12 bg-no-repeat bg-cover rounded-full"></div> */}
        <div className="flex flex-col">
          <h1 className="text-base leading-8">{strings.title}</h1>
          <span className="text-xs">{strings.subtitle}</span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <Svg
          SvgPath={<SvgPath.SvgBell />}
          width="24"
          height="24"
          className="icon mx-3"
        />
        <div
          id="account-menu"
          className="flex flex-row items-center gap-2 relative cursor-pointer menu-hover"
          onClick={(e) => toggleAccountDropdown(e)}
        >
          <div className="bg-primary-light rounded-full p-2 flex flex-col justify-center items-center">
            <Svg
              SvgPath={<SvgPath.SvgUser pathClassName="primary" />}
              width="18"
              height="16"
              className="icon-complex"
              viewBox={"0 0 20 18"}
            />
          </div>
          <span>{strings.account}</span>
          <Svg
            SvgPath={<SvgPath.SvgChevronDown />}
            width="24"
            height="24"
            id="account-drop-icon"
            className="icon"
          />
          <div className="dropdown-menu bg-white hidden cursor-default overflow-hidden left-0 top-8 dropdown-menu-header">
            <div>{strings.logout}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
