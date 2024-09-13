import React from "react";

const LabelWarning = ({ label }) => {
  return (
    <span className="rounded-full bg-warning-light text-warning py-1 px-2">
      {label}
    </span>
  );
};

export default LabelWarning;
