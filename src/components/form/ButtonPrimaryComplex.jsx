import React from "react";
import { useSelector } from "react-redux";

const ButtonPrimaryComplex = ({
  className = "px-12",
  title = "",
  onClick = null,
  children,
}) => {
  const layoutState = useSelector((state) => state.layoutReducer);

  return (
    <button
      className={`h-10 py-2 px-4 flex flex-row justify-center items-center font-medium rounded-md gap-2 bg-primary text-white text-base ${className}`}
      type="button"
      title={title}
      onClick={() => (onClick ? onClick() : null)}
      disabled={layoutState?.loading}
    >
      {children}
    </button>
  );
};

export default ButtonPrimaryComplex;
