import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ModalFilter, InputDatePicker, InputSelect, InputText } from "..";
import utils from "../../utils";
import { userStatuses, userTypes } from "../../types/options";

const tankOwnerOptions = [
  {
    value: "iman",
    text: "ایمان آخوندی",
  },
  {
    value: "hossein",
    text: "حسین عسکری",
  },
  {
    value: "mohammad",
    text: "محمد رضایی",
  },
];

const ModalTanksFilter = ({ onSubmit }) => {
  const pageState = useSelector((state) => state.pageReducer);
  const { modalTanksFilter: strings   } = utils.getLSLocale();

  const onReset = () => {
    pageState?.useForm?.reset();
    onSubmit();
  };

  return (
    <ModalFilter strings={strings} onSubmit={onSubmit} onReset={onReset}>
      <div className="px-4 pb-px">
        <InputText field="filterTankNo" />
        <InputSelect field="filterTankOwner" options={tankOwnerOptions} />
      </div>
    </ModalFilter>
  );
};

export default ModalTanksFilter;
