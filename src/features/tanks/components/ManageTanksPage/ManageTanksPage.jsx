import React from "react";

import {
  AuthLayout,
  ButtonAdd,
  ButtonEditSm,
  ButtonFilter,
  TableItems,
  ButtonViewSm,
  TablePagination,
  ModalTanksFilter,
} from "../../../../components";
import { useTanksPageService } from "../../hooks";
import utils from "../../../../utils";

const ManageTanksPage = () => {
  const service = useTanksPageService();

  const renderHeader = () => (
    <tr className="text-xs text-right text-deactive border-b border-table-border">
      <th className="px-5 font-normal min-w-12">
        <div className="flex flex-col justify-center min-h-12">
          {service.strings.id}
        </div>
      </th>
      <th className="px-5 font-normal min-w-32">{service.strings.tankNo}</th>
      <th className="px-5 font-normal min-w-32">{service.strings.tankOwner}</th>
      <th className="px-5 font-normal min-w-48">
        {service.strings.oilTestExpiryDate}
      </th>
      <th className="px-5 font-normal min-w-32">
        {service.strings.rahaneTestExpiryDate}
      </th>
      <th className="px-5 font-normal min-w-32">
        {service.strings.capotageExpiryDate}
      </th>
      <th className="px-5 font-normal min-w-32">{service.strings.status}</th>
      <th className="px-5 min-w-12">&nbsp; </th>
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
        <td className="px-5 font-medium">{item.tankNo}</td>
        <td className="px-5 font-medium">{item.tankOwner}</td>
        <td className="px-5 font-medium">{item.oilTestExpiryDate}</td>
        <td className="px-5 font-medium">{item.rahaneTestExpiryDate}</td>
        <td className="px-5 font-medium">{item.capotageExpiryDate}</td>
        <td className="px-5 font-medium">
          {/* {item.isBanned && <LabelWarning label={userStatuses.deactive} />}
          {!item.isBanned && <LabelSuccess label={userStatuses.active} />} */}
          empty...
        </td>
        <td className="px-5 font-normal flex-1 flex flex-row gap-2 justify-end">
          <ButtonEditSm onClick={()=>service.navigate(`/tanks/edit/${item.id}`)}/>
          <ButtonViewSm />
        </td>
      </tr>
    ));

  return (
    <AuthLayout>
      <ModalTanksFilter
        AllTankOwner={service.data?.AllTankOwner}
        onSubmit={service.handleSubmit(service.onSubmit)}
      />
      <div className="p-3">
        <div className="flex flex-row justify-between items-center h-12 mb-2">
          <h1 className="font-bold">{service.strings._title}</h1>
          <div className="flex flex-row gap-4">
            <div id="add-user-menu" className="relative cursor-pointer">
              <ButtonAdd
                label={service.strings.btnAdd}
                onClick={service.addTank}
              />
            </div>
            <ButtonFilter
              label={service.strings.btnFilter}
              onClick={service.showModalFilter}
              badge={service.badge}
            />
          </div>
        </div>
        <div className="bg-white rounded section-body overflow-auto">
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

export default ManageTanksPage;
