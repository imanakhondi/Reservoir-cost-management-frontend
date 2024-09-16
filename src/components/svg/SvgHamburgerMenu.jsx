import React from "react";

const SvgHamburgerMenu = ({ pathClassName }) => {
  return (
    <>
      <rect
        y="2"
        width="16"
        height="1"
        rx="1"
        fill="#505050"
        className={pathClassName}
      />
      <rect
        y="7"
        width="16"
        height="1"
        rx="1"
        fill="#505050"
        className={pathClassName}
      />
      <rect
        y="12"
        width="16"
        height="1"
        rx="1"
        fill="#505050"
        className={pathClassName}
      />
    </>
  );
};

export default SvgHamburgerMenu;
