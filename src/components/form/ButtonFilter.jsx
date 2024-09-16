import React from "react";

import utils from "../../utils";
import Svg, { SvgPath } from "../svg";

const ButtonFilter = ({ label, onClick, badge = null }) => {
  return (
    <button
      className="flex flex-row justify-center items-center md:px-4 py-2 gap-2 rounded md:bg-primary text-sm text-primary md:text-white"
      onClick={onClick}
    >
      <Svg
        SvgPath={<SvgPath.SvgFilter pathClassName={"stroke-primary md:stroke-white"} />}
        className="icon-complex md:ml-4 h-5 w-5 md:h-3.5 md:w-4"
        viewBox={"0 0 16 14"}
      />
       <span className="hidden md:flex">{label}</span>
      {badge > 0 && (
        <span className="rounded-full inline-block text-xs font-medium bg-warning px-2 py-1">
          {utils.localeDigits(badge)}
        </span>
      )}
    </button>
  );
};

export default ButtonFilter;
