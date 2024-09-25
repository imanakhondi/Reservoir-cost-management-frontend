import React from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Svg, { SvgPath } from "../svg";

function ModalChangeStaus({ open, children, title, onClose }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="inset-0 fixed backdrop-blur-sm h-screen w-full bg-secondary-800 bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/60 shadow-lg p-4 transition-all duration-300 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-b-slate-200 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <Svg
                SvgPath={<SvgPath.SvgClose pathClassName={"stroke-primary"} />}
                width="20"
                height="20"
                className="icon-complex"
                viewBox={"0 0 20 20"}
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default ModalChangeStaus;
