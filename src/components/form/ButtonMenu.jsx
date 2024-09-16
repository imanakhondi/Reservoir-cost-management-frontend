import React from "react";
import Svg, { SvgPath } from "../svg";

const ButtonMenu = ({ onClick }) => {
  return (
    <button
      className="flex md:hidden flex-row justify-center items-center px-4 py-2 gap-2 rounded text-sm text-primary"
      onClick={onClick}
    >
      <Svg
        SvgPath={<SvgPath.SvgHamburgerMenu pathClassName={"stroke-primary"} />}
        width="16"
        height="14"
        className="icon-complex ml-4"
        viewBox={"0 0 16 14"}
      />
    </button>
  );
};

export default ButtonMenu;
