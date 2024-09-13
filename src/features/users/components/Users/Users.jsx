import React from "react";
import { Link } from "react-router-dom";

import {
  AuthLayout,
  ButtonAdd,
  ButtonEditSm,
  ButtonFilter,
  LabelSuccess,
  LabelWarning,
  TableItems,
  ModalUsersFilter,
  ButtonViewSm,
  InputSelectPagination,
  TablePagination,
} from "../../../../components";
import { useUsersPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import utils from "../../../../utils";
import { pageItems } from "../../../../types/options";

const Users = () => {
  const service = useUsersPageService();
  const { userStatuses, pagination } = utils.getLSLocale();

  const renderHeader = () => (
    <tr className="text-xs text-right text-deactive border-b border-table-border">
      <th className="px-5 font-normal min-w-12">
        <div className="flex flex-col justify-center min-h-12">
          {service.strings.id}
        </div>
      </th>
      <th className="px-5 font-normal min-w-20">{service.strings.image}</th>
      <th className="px-5 font-normal min-w-32">
        {service.strings.nameFamily}
      </th>
      <th className="px-5 font-normal min-w-32">{service.strings.username}</th>
      <th className="px-5 font-normal min-w-32">{service.strings.mobile}</th>
      <th className="px-5 font-normal w-full">{service.strings.status}</th>
      <th className="px-5 min-w-12">&nbsp;</th>
    </tr>
  );

  const renderItems = () =>
    service.data?.items &&
    service.data.items.map((item, index) => (
      <tr
        key={index}
        className="text-xs text-subline border-b border-table-border"
      >
        <td className="px-5 font-medium min-h-14 w-12 flex flex-col justify-center">
          {utils.localeDigits(item.id)}
        </td>
        <td className="px-5 font-medium">&nbsp;</td>
        <td className="px-5 font-medium">{item.name}</td>
        <td className="px-5 font-medium">{item.username}</td>
        <td className="px-5 font-medium">{utils.localeDigits(item.phone)}</td>
        <td className="px-5 font-medium">
          {item.isBanned && <LabelWarning label={userStatuses.deactive} />}
          {!item.isBanned && <LabelSuccess label={userStatuses.active} />}
        </td>
        <td className="px-5 font-normal flex-1 flex flex-row gap-2 justify-end">
          <ButtonEditSm />
          <ButtonViewSm />
        </td>
      </tr>
    ));

  return (
    <AuthLayout>
      <ModalUsersFilter
        provinces={service.data?.provinces}
        cities={service.data?.cities}
        skills={service.data?.skills}
        onSubmit={service.handleSubmit(service.onSubmit)}
      />
      <div className="p-3">
        <div className="flex flex-row justify-between items-center h-12 mb-2">
          <h1 className="font-bold">{service.strings._title}</h1>
          <div className="flex flex-row gap-4">
            <div id="add-user-menu" className="relative cursor-pointer">
              <ButtonAdd
                label={service.strings.btnAdd}
                onClick={service.toggleAddUserDropdown}
              />
              <div className="absolute hidden cursor-default overflow-hidden right-0 top-11 dropdown-menu-header rounded">
                <div className="bg-white px-4 py-1 border border-border-line rounded-t">
                  <Link
                    className="flex flex-row items-center gap-2"
                    to={`/users/add`}
                  >
                    <Svg
                      SvgPath={
                        <SvgPath.SvgCirclePlus
                          pathClassName={"stroke-subline"}
                        />
                      }
                      width="24"
                      height="24"
                      className="icon-complex"
                      viewBox={"0 0 16 16"}
                    />
                    <span className="text-subline w-max text-sm">
                      {service.strings.addUserQuick}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <ButtonFilter
              label={service.strings.btnFilter}
              onClick={service.showModalFilter}
              badge={service.badge}
            />
          </div>
        </div>
        <div className="bg-white rounded section-body">
          <TableItems
            items={service.data?.items}
            renderHeader={renderHeader}
            renderItems={renderItems}
            colSpan={7}
          />
        </div>
        <TablePagination
          pagination={service.pagination}
          setPagination={service.setPagination}
          onChangePageItems={service.onChangePageItems}
        />
      </div>
    </AuthLayout>
  );
};

export default Users;
