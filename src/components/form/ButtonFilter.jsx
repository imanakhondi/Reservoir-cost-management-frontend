import React from "react";

import utils from "../../utils";
import Svg, { SvgPath } from "../svg";

const ButtonFilter = ({ label, onClick, badge = null }) => {
  return (
    <button
      className="flex flex-row justify-center items-center px-4 py-2 gap-2 rounded bg-primary text-sm text-white"
      onClick={onClick}
    >
      <Svg
        SvgPath={<SvgPath.SvgFilter pathClassName={"stroke-white"} />}
        width="16"
        height="14"
        className="icon-complex ml-4"
        viewBox={"0 0 16 14"}
      />
      {label}
      {badge > 0 && (
        <span className="rounded-full inline-block text-xs font-medium bg-warning px-2 py-1">
          {utils.localeDigits(badge)}
        </span>
      )}
    </button>
  );
};

export default ButtonFilter;
