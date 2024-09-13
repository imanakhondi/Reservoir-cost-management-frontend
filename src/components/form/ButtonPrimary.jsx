import React from "react";

import { Button } from "..";

const ButtonPrimary = ({
  className = "px-12",
  strings = null,
  label = "",
  onClick = null,
}) => {
  return (
    <Button
      strings={strings}
      label={label}
      className={`bg-primary text-white text-base ${className}`}
      onClick={onClick}
    />
  );
};

export default ButtonPrimary;
