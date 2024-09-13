import React from "react";

const ModalLayout = ({ children }) => {
  return (
    <div className={`w-full h-full bg-modal absolute top-0 left-0 z-50 hidden`}>
      {children}
    </div>
  );
};

export default ModalLayout;
