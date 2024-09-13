import React from "react";
import { useDispatch } from "react-redux";

import { Modal, ButtonPrimary, ButtonWhite } from "..";
import Svg, { SvgPath } from "../svg";
import { setShownModalAction } from "../../stores/layout/layoutActions";

const ModalFilter = ({ children, strings, onSubmit, onReset, onCancel }) => {
  const dispatch = useDispatch();
  const id = "filter-modal";

  const cancelModal = () => {
    if (onCancel) {
      onCancel();
    }
    dispatch(setShownModalAction(null));
  };

  return (
    <Modal id={id}>
      <div className="flex flex-row-reverse h-full">
        <div className="bg-white w-96 modal transition-opacity opacity-0 flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center p-4 border-2 border-border-line">
            <div className="flex flex-row gap-2 items-center">
              <Svg
                SvgPath={<SvgPath.SvgFilter pathClassName={"stroke-subline"} />}
                width="22"
                height="20"
                className="icon-complex"
                viewBox={"0 0 16 14"}
              />
              <span className="text-subline">{strings._title}</span>
            </div>
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
          <div className="flex flex-row items-center justify-between gap-x-2 p-4">
            <ButtonPrimary
              label="filterSubmit"
              onClick={onSubmit}
              className="w-full"
            />
            <ButtonWhite
              label="filterReset"
              onClick={onReset}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalFilter;
