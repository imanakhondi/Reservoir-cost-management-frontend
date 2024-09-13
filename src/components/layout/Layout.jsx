import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideUp } from "es6-slide-up-down";

import {
  setDropDownElementAction,
  setShownModalAction,
} from "../../stores/layout/layoutActions";

const Layout = ({ children, className }) => {
  const dispatch = useDispatch();
  const layoutState = useSelector((state) => state.layoutReducer);
  const messageState = useSelector((state) => state.messageReducer);

  useEffect(() => {
    if (messageState?.message && messageState?.messageField) {
      document.querySelector(`#${messageState?.messageField}`)?.focus();
    }
  }, [messageState?.message]);

  const onAppContainerClick = (e) => {
    onToggleDropDowns(e);
    onToggleModal(e);
  };

  const onToggleDropDowns = (e) => {
    let element = e.target;
    let clickedOnDropDown = false;

    while (element.parentNode) {
      if (element.classList.contains("dropdown-list")) {
        clickedOnDropDown = true;
        break;
      }

      element = element.parentNode;
    }

    if (!clickedOnDropDown && layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);
      document.querySelector("#account-drop-icon").classList.remove("arrow-up");
      dispatch(setDropDownElementAction(null));
    }
  };

  const onToggleModal = (e) => {
    if (!layoutState?.shownModal) {
      return;
    }

    let element = e.target;
    let clickedOnModal = false;

    while (element.parentNode) {
      if (element.classList.contains("modal")) {
        clickedOnModal = true;
        break;
      }

      element = element.parentNode;
    }

    if (!clickedOnModal && layoutState?.shownModal) {
      dispatch(setShownModalAction(null));
    }
  };

  return (
    <div
      className={`flex min-h-screen ${className}`}
      onClick={(e) => onAppContainerClick(e)}
    >
      {children}
    </div>
  );
};

export default Layout;
