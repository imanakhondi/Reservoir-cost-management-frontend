import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ModalLayout } from "..";
import { MODAL_RESULT } from "../../types";
import { setShownModalAction } from "../../stores/layout/layoutActions";

const Modal = ({ children, id, onClose = null, modalResult = undefined }) => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (layoutState?.shownModal?.modal === id) {
      showModal();
    } else if (!layoutState?.shownModal?.modal) {
      hideModal();
    }
  }, [layoutState?.shownModal?.modal]);

  useEffect(() => {
    if (
      layoutState?.shownModal?.modal === id &&
      [MODAL_RESULT.OK, MODAL_RESULT.CANCEL, MODAL_RESULT.CLOSE].includes(
        modalResult
      )
    ) {
      hideModal();
    }
  }, [modalResult]);

  const showModal = () => {
    const element = document.querySelector(`#${id}`);
    dispatch(setShownModalAction(id, layoutState?.shownModal?.props));
    element.parentElement.classList.add("block");
    element.parentElement.classList.remove("hidden");
    setTimeout(() => {
      element.firstChild.firstChild.style.opacity = 1;
    }, 100);
  };

  const hideModal = () => {
    const element = document.querySelector(`#${id}`);

    setTimeout(() => {
      element.firstChild.firstChild.style.opacity = 0;
      element.parentElement.classList.remove("block");
      element.parentElement.classList.add("hidden");

      if (layoutState?.shownModal) {
        dispatch(setShownModalAction(null));
      }

      if (typeof onClose === "function") {
        onClose();
      }
    }, 100);
  };

  return (
    <ModalLayout>
      <div id={id} className="h-full">
        {children}
      </div>
    </ModalLayout>
  );
};

export default Modal;
