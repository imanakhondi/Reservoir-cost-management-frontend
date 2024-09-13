import React from "react";

import { AlertState, Header, Layout, Sidebar } from "../";

const AuthLayout = ({ children }) => {
  return (
    <Layout className="flex-col">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1 p-4">
          <AlertState />
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default AuthLayout;
