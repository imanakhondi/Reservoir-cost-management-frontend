import React from "react";

const LabelDisable = ({ label }) => {
  return (
    <span className="rounded-full bg-disable-light text-disable py-1 px-2">
      {label}
    </span>
  );
};

export default LabelDisable;
