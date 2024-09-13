import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ModalFilter, InputDatePicker, InputSelect, InputText } from "..";
import utils from "../../utils";
import { userStatuses, userTypes } from "../../types/options";

const ModalCostsFilter = ({ onSubmit }) => {
  const pageState = useSelector((state) => state.pageReducer);
  const { modalCostsFilter: strings } = utils.getLSLocale();

  const onReset = () => {
    pageState?.useForm?.reset();
    onSubmit();
  };

  return (
    <ModalFilter strings={strings} onSubmit={onSubmit} onReset={onReset}>
      <div className="px-4 pb-px">
        <InputText field="filterCostName" />
        <InputText field="filterServiceName" />
      </div>
    </ModalFilter>
  );
};

export default ModalCostsFilter;
