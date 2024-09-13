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

const Dashboard = () => {
  const service = useDashboardPageService();
  const { postStatuses } = utils.getLSLocale();

  const renderMetric = (value, isAscending, isSuccess) => (
    <li>
      <span className="value">{utils.localeDigits(value)}</span>
      <div className="flex justify-center trend gap-2">
        {isAscending && (
          <Svg
            SvgPath={<SvgPath.SvgAscending />}
            width="21"
            height="20"
            fill="none"
          />
        )}
        {!isAscending && (
          <Svg
            SvgPath={<SvgPath.SvgDescending />}
            width="21"
            height="20"
            fill="none"
          />
        )}
        <span className={isSuccess ? "text-success" : "text-warning"}>
          {utils.localeDigits(value)} نفر
        </span>
      </div>
      <span className="title">تعداد کاربران</span>
    </li>
  );

  return (
    <AuthLayout>
      <h1>Dashboard Page</h1>
      {/* <div className="p-3">
        <h1 className="font-bold mb-2">{service.strings.statistics}</h1>
        <ul className="flex flex-wrap metrics gap-2">
          {renderMetric(32, true, true)}
          {renderMetric(12, true, true)}
          {renderMetric(82, false, false)}
          {renderMetric(63, true, true)}
          {renderMetric(91, false, false)}
          {renderMetric(144, true, true)}
        </ul>
      </div>
      <div className="section mt-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <div className="flex flex-row justify-between items-center mb-2">
              <h1 className="font-bold">{service.strings.latestPosts}</h1>
              <Link
                to={`/`}
                className="flex flex-row justify-start items-center gap-2 text-primary"
              >
                <span>{service.strings.view}</span>

                <Svg
                  SvgPath={<SvgPath.SvgChevronDown />}
                  width="16"
                  height="16"
                  className="rotate-90 fill-primary"
                />
              </Link>
            </div>
            <div className="bg-white rounded section-body">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-deactive border-b border-table-border">
                    <th className="px-5 font-normal text-right w-12">
                      <div className="flex flex-col justify-center min-h-12">
                        {service.strings.postsNo}
                      </div>
                    </th>
                    <th className="px-5 font-normal w-20">
                      {service.strings.postsCode}
                    </th>
                    <th className="px-5 font-normal text-right w-40">
                      {service.strings.postsWriter}
                    </th>
                    <th className="px-5 font-normal w-40">
                      {service.strings.postsPublishedTime}
                    </th>
                    <th className="px-5 font-normal w-36">
                      {service.strings.postsPublishedStatus}
                    </th>
                    <th className=" w-auto"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-xs text-subline border-b border-table-border">
                    <td className="px-5 font-medium min-h-14 w-12 flex flex-col justify-center">
                      {service.strings.postsNo}
                    </td>
                    <td className="px-5 font-medium text-center">
                      {service.strings.postsCode}
                    </td>
                    <td className="px-5 font-medium">
                      <div className="flex flex-row items-center gap-2">
                        <span>{service.strings.postsWriter}</span>
                        <a target="_blank" href="/">
                          <Svg
                            SvgPath={
                              <SvgPath.SvgBlank
                                pathClassName={"stroke-primary"}
                              />
                            }
                            width="14"
                            height="14"
                            viewBox={"0 0 14 14"}
                            className="fill-none"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <span dir="ltr">
                        {utils.localeDigits("1403/12/24 - 14:03:19")}
                      </span>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <LabelSuccess label={postStatuses.published} />
                    </td>
                    <td className="px-5 font-medium text-center">&nbsp;</td>
                  </tr>
                  <tr className="text-xs text-subline border-b border-table-border">
                    <td className="px-5 font-medium min-h-14 w-12 flex flex-col justify-center">
                      {service.strings.postsNo}
                    </td>
                    <td className="px-5 font-medium text-center">
                      {service.strings.postsCode}
                    </td>
                    <td className="px-5 font-medium">
                      <div className="flex flex-row items-center gap-2">
                        <span>{service.strings.postsWriter}</span>
                        <a target="_blank" href="/">
                          <Svg
                            SvgPath={
                              <SvgPath.SvgBlank
                                pathClassName={"stroke-primary"}
                              />
                            }
                            width="14"
                            height="14"
                            viewBox={"0 0 14 14"}
                            className="fill-none"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <span dir="ltr">
                        {utils.localeDigits("1403/12/24 - 14:03:19")}
                      </span>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <LabelYellow label={postStatuses.waiting} />
                    </td>
                    <td className="px-5 font-medium text-center">&nbsp;</td>
                  </tr>
                  <tr className="text-xs text-subline border-b border-table-border">
                    <td className="px-5 font-medium min-h-14 w-12 flex flex-col justify-center">
                      {service.strings.postsNo}
                    </td>
                    <td className="px-5 font-medium text-center">
                      {service.strings.postsCode}
                    </td>
                    <td className="px-5 font-medium">
                      <div className="flex flex-row items-center gap-2">
                        <span>{service.strings.postsWriter}</span>
                        <a target="_blank" href="/">
                          <Svg
                            SvgPath={
                              <SvgPath.SvgBlank
                                pathClassName={"stroke-primary"}
                              />
                            }
                            width="14"
                            height="14"
                            viewBox={"0 0 14 14"}
                            className="fill-none"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <span dir="ltr">
                        {utils.localeDigits("1403/12/24 - 14:03:19")}
                      </span>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <LabelDisable label={postStatuses.hidden} />
                    </td>
                    <td className="px-5 font-medium text-center">&nbsp;</td>
                  </tr>
                  <tr className="text-xs text-subline border-b border-table-border">
                    <td className="px-5 font-medium min-h-14 w-12 flex flex-col justify-center">
                      {service.strings.postsNo}
                    </td>
                    <td className="px-5 font-medium text-center">
                      {service.strings.postsCode}
                    </td>
                    <td className="px-5 font-medium">
                      <div className="flex flex-row items-center gap-2">
                        <span>{service.strings.postsWriter}</span>
                        <a target="_blank" href="/">
                          <Svg
                            SvgPath={
                              <SvgPath.SvgBlank
                                pathClassName={"stroke-primary"}
                              />
                            }
                            width="14"
                            height="14"
                            viewBox={"0 0 14 14"}
                            className="fill-none"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <span dir="ltr">
                        {utils.localeDigits("1403/12/24 - 14:03:19")}
                      </span>
                    </td>
                    <td className="px-5 font-medium text-center">
                      <LabelWarning label={postStatuses.deleted} />
                    </td>
                    <td className="px-5 font-medium text-center">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-row justify-between items-center mb-2">
              <h1 className="font-bold">{service.strings.events}</h1>
              <Link
                to={`/`}
                className="flex flex-row justify-start items-center gap-2 text-primary"
              >
                <span>{service.strings.view}</span>

                <Svg
                  SvgPath={<SvgPath.SvgChevronDown />}
                  width="16"
                  height="16"
                  className="rotate-90 fill-primary"
                />
              </Link>
            </div>
            <div className="bg-white rounded section-body">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-deactive border-b border-table-border">
                    <th className="px-5 font-normal text-right w-12">
                      <div className="flex flex-col justify-center min-h-12">
                        {service.strings.eventsUser}
                      </div>
                    </th>
                    <th className="px-5 font-normal w-48">
                      {service.strings.eventsType}
                    </th>
                    <th className="px-5 font-normal w-40">
                      {service.strings.eventsTime}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-xs text-subline border-b border-table-border">
                    <td className="px-5 font-medium">
                      <div className="min-h-14 flex flex-row items-center gap-2">
                        <Svg
                          SvgPath={<SvgPath.SvgUser pathClassName="primary" />}
                          width="32"
                          height="32"
                          className="icon-complex"
                        />
                        <span>{service.strings.eventsUser}</span>
                        <a target="_blank" href="/">
                          <Svg
                            SvgPath={
                              <SvgPath.SvgBlank
                                pathClassName={"stroke-primary"}
                              />
                            }
                            width="14"
                            height="14"
                            viewBox={"0 0 14 14"}
                            className="fill-none"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="px-5 font-medium text-center">
                      {service.strings.eventsType}
                    </td>
                    <td className="px-5 font-medium text-center flex flex-col justify-center gap-2 min-h-14">
                      <span>{utils.localeDigits("1392/03/05")}</span>
                      <span>{utils.localeDigits("23:05:19")}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </AuthLayout>
  );
};

export default Dashboard;
