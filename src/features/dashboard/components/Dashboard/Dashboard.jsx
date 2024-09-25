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
      {adminState?.admin && renderAdminDashboard()}
      {adminState?.operator && renderOperatorDashboard()}
      {adminState?.internalManager && renderInternalManagerDashboard()}
      {adminState?.financial && renderFinancialDashboard()}
      {adminState?.merchant && renderMerchantDashboard()}
    </AuthLayout>
  );
};

export default Dashboard;

const summaryDataAdmin = [
  {
    dynamicCount: "32",
    dynamicLabel: "2",
    label: "نفر",
    descriptionText: "تعداد کل تجار فعال",
  },
  {
    dynamicCount: "10",
    dynamicLabel: "3",
    label: "مخزن",
    descriptionText: "تعداد کل مخازن ثبت شده",
  },
  {
    dynamicCount: "18",
    dynamicLabel: "-2",
    label: "هزینه‌",
    descriptionText: "تعداد کل هزینه‌های ثبت شده (تائید شده)",
  },
  {
    dynamicCount: "9",
    dynamicLabel: "5",
    label: "هزینه‌",
    descriptionText: "تعداد کل هزینه‌های ثبت شده (در انتظار تائید)",
  },
];

function renderAdminDashboard() {
  return (
    <SummaryDashboard title="نمای کلی شرکت">
      {summaryDataAdmin.length > 0 &&
        summaryDataAdmin.map((item, index) => (
          <SummaryCard key={index} {...item} />
        ))}
    </SummaryDashboard>
  );
}

function renderOperatorDashboard() {
  return (
    <SummaryDashboard title="نمای کلی کاربر">
      <h2>render Operator Dashboard</h2>
    </SummaryDashboard>
  );
}

function renderInternalManagerDashboard() {
  return (
    <SummaryDashboard title="نمای کلی مدیر داخلی">
      <h2>render Internal Manager Dashboard</h2>
    </SummaryDashboard>
  );
}

function renderFinancialDashboard() {
  return (
    <SummaryDashboard title="نمای کلی مدیر مالی">
      <h2>render Financial Dashboard</h2>
    </SummaryDashboard>
  );
}

function renderMerchantDashboard() {
  return (
    <SummaryDashboard title="نمای کلی تاجر">
      <h2>render Merchant Dashboard</h2>{" "}
    </SummaryDashboard>
  );
}

function SummaryDashboard({ title, children }) {
  return (
    <div className="">
      <h1 className="text-xl font-bold text-[#rgba(80, 80, 80, 1)] mb-2">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}

function SummaryCard({ dynamicCount, dynamicLabel, label, descriptionText }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 bg-white rounded-lg shadow-xl px-7 py-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-[#rgba(80, 80, 80, 1)]">
          {utils.localeDigits(dynamicCount)}
        </p>
        <div className="flex gap-x-2">
          {dynamicLabel > 0 ? (
            <Svg
              SvgPath={
                <SvgPath.SvgAscending pathClassName={"stroke-subline"} />
              }
              width="24"
              height="24"
              className="icon-complex"
              viewBox={"0 0 20 20"}
            />
          ) : (
            <Svg
              SvgPath={
                <SvgPath.SvgDescending pathClassName={"stroke-subline"} />
              }
              width="24"
              height="24"
              className="icon-complex"
              viewBox={"0 0 20 20"}
            />
          )}

          <span
            className={`text-sm ${
              dynamicLabel > 0 ? "text-[#58B961]" : "text-[#EF5033]"
            }`}
          >
            {utils.localeDigits(Math.abs(dynamicLabel))} {label}
          </span>
        </div>
      </div>
      <p className="text-sm font-medium text-[rgba(67, 61, 61, 1)]">
        {descriptionText}
      </p>
    </div>
  );
}
