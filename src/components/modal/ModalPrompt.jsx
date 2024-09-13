import React from "react";
import { useDispatch } from "react-redux";

import { Modal } from "..";
import Svg, { SvgPath } from "../svg";
import { setShownModalAction } from "../../stores/layout/layoutActions";

const ModalPrompt = ({ children, strings, renderFooter, onCancel }) => {
  const dispatch = useDispatch();
  const id = "prompt-modal";

  const cancelModal = () => {
    if (onCancel) {
      onCancel();
    }

    dispatch(setShownModalAction(null));
  };

  return (
    <Modal id={id}>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="bg-white w-1/3 modal transition-opacity opacity-0 flex flex-col justify-between rounded">
          <div className="flex flex-row justify-between items-center px-4 py-3 border-b border-border-line">
            <span className="text-subline">{strings._title}</span>
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
          <div className="flex-1">{children}</div>
          <div className="p-4 border-t border-border-line">
            {renderFooter()}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPrompt;
