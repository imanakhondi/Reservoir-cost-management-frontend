import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ModalFilter, InputDatePicker, InputSelect, InputText } from "..";
import utils from "../../utils";
import { userStatuses, userTypes } from "../../types/options";

const ModalUsersFilter = ({ onSubmit }) => {
  const pageState = useSelector((state) => state.pageReducer);
  const { modalUsersFilter: strings } = utils.getLSLocale();

  const onReset = () => {
    pageState?.useForm?.reset();
    onSubmit();
  };

  return (
    <ModalFilter strings={strings} onSubmit={onSubmit} onReset={onReset}>
      <div className="px-4 pb-px">
        <InputText field="filterName" />
        <InputText field="filterUsername" />
        <InputText field="filterMobile" />
        <InputSelect field="filterStatus" options={userStatuses} />
        <InputSelect field="filterType" options={userTypes} />
        <InputDatePicker field="filterCreatedAt" />
      </div>
    </ModalFilter>
  );
};

export default ModalUsersFilter;
