import React from "react";
import { Link } from "react-router-dom";

import {
  AuthLayout,
  LabelDisable,
  LabelSuccess,
  LabelWarning,
  LabelYellow,
} from "../../../../components";
import utils from "../../../../utils";
import { useDashboardPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const service = useDashboardPageService();
  const { postStatuses } = utils.getLSLocale();
  const adminState = useSelector((state) => state.adminReducer);

  return (
    <AuthLayout>
      <h1>Dashboard Page</h1>
      {adminState?.admin && renderAdminDashboard()}
      {adminState?.operator && renderOperatorDashboard()}
      {adminState?.internalManager && renderInternalManagerDashboard()}
      {adminState?.financial && renderFinancialDashboard()}
      {adminState?.merchant && renderMerchantDashboard()}
    </AuthLayout>
  );
};

export default Dashboard;

function renderAdminDashboard() {
  return <h2>render Admin Dashboard</h2>;
}

function renderOperatorDashboard() {
  return <h2>render Operator Dashboard</h2>;
}

function renderInternalManagerDashboard() {
  return <h2>render Internal Manager Dashboard</h2>;
}

function renderFinancialDashboard() {
  return <h2>render Financial Dashboard</h2>;
}

function renderMerchantDashboard() {
  return <h2>render Merchant Dashboard</h2>;
}
