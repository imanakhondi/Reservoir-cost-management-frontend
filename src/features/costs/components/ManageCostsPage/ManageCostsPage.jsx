import React, { useState } from "react";

import {
  AuthLayout,
  ButtonAdd,
  ButtonEditSm,
  ButtonFilter,
  TableItems,
  ButtonViewSm,
  TablePagination,
} from "../../../../components";
import { useCostsPageService } from "../../hooks";
import utils from "../../../../utils";
import ModalCostsFilter from "../../../../components/modal/ModalCostsFilter";
import ModalChangeStaus from "../../../../components/modal/ModalChangeStaus";
import ChangeCostStatus from "../ChangeCostStatus/ChangeCostStatus";

const ManageCostsPage = () => {
  const service = useCostsPageService();
  const [isChangeStatusCost, setIsChangeStatusCost] = useState(false);

  const renderHeader = () => (
    <tr className="text-xs text-right text-deactive border-b border-table-border">
      <th className="px-5 font-normal min-w-12">
        <div className="flex flex-col justify-center min-h-12">
          {service.strings.id}
        </div>
      </th>
      <th className="px-5 font-normal min-w-32">{service.strings.tankOwner}</th>
      <th className="px-5 font-normal min-w-32">{service.strings.tankNo}</th>
      <th className="px-5 font-normal min-w-32">
        {service.strings.serviceType}
      </th>
      <th className="px-5 font-normal min-w-32">{service.strings.cost}</th>
      <th className="px-5 font-normal min-w-32">{service.strings.costDate}</th>
      <th className="px-5 font-normal min-w-40">تائید / رد توسط تاجر</th>
      <th className="px-5 font-normal w-full">{service.strings.status}</th>
      <th className="px-5 min-w-12">&nbsp;</th>
    </tr>
  );
  service.data.items = [{ id: 1 }];
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
        <td className="px-5 font-medium">{item.tankOwner}</td>
        <td className="px-5 font-medium">{item.tankNo}</td>
        <td className="px-5 font-medium">{item.serviceType}</td>
        <td className="px-5 font-medium">{item?.cost || "-"}</td>
        <td className="px-5 font-medium">{item?.costDate || "-"}</td>
        <td className="px-5 font-medium"></td>
        <td className="px-5 font-medium">
          {/* {item.isBanned && <LabelWarning label={userStatuses.deactive} />}
          {!item.isBanned && <LabelSuccess label={userStatuses.active} />} */}
          empty...
        </td>
        <td className="px-5 font-normal flex-1 flex flex-row gap-2 justify-end">
          <ButtonEditSm
            onClick={() => service.navigate(`/costs/edit/${item.id}`)}
          />
          <ButtonViewSm onClick={() => setIsChangeStatusCost(true)} />
          <ModalChangeStaus
            title="تغییر وضعیت"
            open={isChangeStatusCost}
            onClose={() => setIsChangeStatusCost(false)}
          >
            <ChangeCostStatus
              costId={item.id}
              onClose={() => setIsChangeStatusCost(false)}
            />
          </ModalChangeStaus>
        </td>
      </tr>
    ));

  return (
    <AuthLayout>
      <ModalCostsFilter onSubmit={service.handleSubmit(service.onSubmit)} />
      <div className="p-3">
        <div className="flex flex-row justify-between items-center h-12 mb-2">
          <h1 className="font-bold">{service.strings._title}</h1>
          <div className="flex flex-row gap-4">
            <div id="add-user-menu" className="relative cursor-pointer">
              <ButtonAdd
                label={service.strings.btnAdd}
                onClick={service.addCost}
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

export default ManageCostsPage;
