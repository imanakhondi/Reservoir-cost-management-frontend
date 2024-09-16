import React from "react";

import { Sidebar } from "..";
import ModalMenu from "./ModalMenu";

const ModalShowMenu = () => {
  return (
    <ModalMenu>
      <div className=" pb-px">
        <Sidebar />
      </div>
    </ModalMenu>
  );
};

export default ModalShowMenu;
