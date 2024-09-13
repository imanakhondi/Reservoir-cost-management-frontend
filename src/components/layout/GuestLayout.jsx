import React from "react";

import { AlertState, Layout } from "..";

const GuestLayout = ({ children, title }) => {
  return (
    <Layout className="flex-row-reverse layout guest">
      <div className="sidebar guest w-48"></div>
      <div className="flex flex-col flex-1 justify-center items-center p-4">
        {/* <div className="logo w-32 h-32 rounded-full bg-no-repeat bg-cover mb-4"></div> */}
        <h2 className="text-label mb-4">{title}</h2>
        <div className="flex flex-col justify-center items-center bg-white p-4 rounded-lg w-96 box">
          <AlertState />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default GuestLayout;
