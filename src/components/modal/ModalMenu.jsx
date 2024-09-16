import React from "react";
import { useDispatch } from "react-redux";

import { Modal, ButtonPrimary, ButtonWhite } from "..";
import Svg, { SvgPath } from "../svg";
import { setShownModalAction } from "../../stores/layout/layoutActions";

const ModalMenu = ({ children, onCancel }) => {
  const dispatch = useDispatch();
  const id = "menu-modal";

  const cancelModal = () => {
    if (onCancel) {
      onCancel();
    }
    dispatch(setShownModalAction(null));
  };

  return (
    <Modal id={id}>
      <div className="flex h-full">
        <div className="bg-white w-96 modal transition-opacity opacity-0 flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center p-4 border-2 border-border-line">
            <div className="flex flex-row gap-2 items-center"></div>
            <div
              className="link-container cursor-pointer"
              onClick={cancelModal}
            >
              <Svg
                SvgPath={<SvgPath.SvgClose pathClassName={"fill-subline"} />}
                width="24"
                height="24"
              />
            </div>
          </div>
          <div className="flex-1 overflow-scroll">{children}</div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMenu;
