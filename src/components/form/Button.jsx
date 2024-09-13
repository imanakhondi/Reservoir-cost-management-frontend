import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Button = ({
  className = "",
  strings = null,
  label = "",
  onClick = null,
  beforeIcon = null,
}) => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);

  const [btnLabel, setBtnLabel] = useState(
    strings && label in strings ? strings[label] : ""
  );

  useEffect(() => {
    if (!strings) {
      setBtnLabel(
        pageState?.strings && label in pageState.strings
          ? pageState?.strings[label]
          : ""
      );
    }
  }, [pageState]);

  return (
    <button
      className={`h-10 py-2 px-4 flex flex-row justify-center items-center font-medium rounded-md gap-2 ${className}`}
      type="button"
      title={btnLabel}
      onClick={() => (onClick ? onClick() : null)}
      disabled={layoutState?.loading}
    >
      {beforeIcon}
      {btnLabel}
    </button>
  );
};

export default Button;
