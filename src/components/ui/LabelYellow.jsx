import React from "react";

const LabelYellow = ({ label }) => {
  return (
    <span className="rounded-full bg-yellow-light text-yellow py-1 px-2">
      {label}
    </span>
  );
};

export default LabelYellow;
