import React from "react";

import Svg, { SvgPath } from "../svg";

const ButtonViewSm = ({ title, onClick }) => {
  return (
    <button
      className="rounded bg-primary-light w-8 h-8 flex flex-col justify-center items-center"
      onClick={onClick}
      title={title}
    >
      <Svg
        SvgPath={<SvgPath.SvgView pathClassName={"stroke-primary"} />}
        width="20"
        height="20"
        className="icon-complex"
        viewBox={"0 0 16 16"}
      />
    </button>
  );
};

export default ButtonViewSm;
