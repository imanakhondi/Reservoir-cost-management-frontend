import React from "react";

import Svg, { SvgPath } from "../svg";

const ButtonAdd = ({ label, onClick }) => {
  return (
    <button
      className="flex flex-row justify-center items-center md:px-4 py-2 rounded md:bg-white md:border-2 border-primary text-sm text-primary"
      onClick={onClick}
    >
      <Svg
        SvgPath={<SvgPath.SvgCirclePlus pathClassName={"stroke-primary"} />}
        className="icon-complex md:ml-4 h-5 w-5 md:h-4 md:w-4" 
        viewBox={"0 0 16 16"}
      />
      <span className="hidden md:flex">{label}</span>
    </button>
  );
};

export default ButtonAdd;
