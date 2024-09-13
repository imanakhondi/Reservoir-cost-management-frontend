import React from "react";

const LabelSuccess = ({ label }) => {
  return (
    <span className="rounded-full bg-success-light text-success py-1 px-2">
      {label}
    </span>
  );
};

export default LabelSuccess;
