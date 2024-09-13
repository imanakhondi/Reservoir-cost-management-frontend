import React from "react";

import { Layout } from "../../../components";
import utils from "../../../utils";

const { fallbackErrorPage: strings } = utils.getLSLocale();

const FallbackError = () => {
  return (
    <Layout>
      <div className="left-sidebar"></div>
      <div className="main not-auth">
        <div className="logo"></div>
        <h2 className="label">{strings.title}</h2>
        <a href="#" className="btn btn-primary">
          {strings.backToHomePage}
        </a>
      </div>
    </Layout>
  );
};

export default FallbackError;
