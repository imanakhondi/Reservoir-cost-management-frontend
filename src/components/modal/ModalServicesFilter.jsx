import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ModalFilter, InputDatePicker, InputSelect, InputText } from "..";
import utils from "../../utils";
import { userStatuses, userTypes } from "../../types/options";

const ModalServicesFilter = ({ onSubmit }) => {
  const pageState = useSelector((state) => state.pageReducer);
  const { modalServicesFilter: strings,addServicePage:stringsField } = utils.getLSLocale();

  const onReset = () => {
    pageState?.useForm?.reset();
    onSubmit();
  };

  return (
    <ModalFilter strings={strings} onSubmit={onSubmit} onReset={onReset}>
      <div className="px-4 pb-px">
        <InputText field="filterServiceName" />
      </div>
    </ModalFilter>
  );
};

export default ModalServicesFilter;
