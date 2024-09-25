import React from "react";
import { ButtonPrimary, InputSelect } from "../../../../components";

const costStatus = [
  {
    value: 0,
    text: "رد شده",
    className: "badge--danger",
  },
  {
    value: 1,
    text: "در انتظار تائید",
    className: "badge--secondary",
  },
  {
    value: 2,
    text: "تائید شده",
    className: "badge--success",
  },
];
function ChangeCostStatus({ costId, onClose }) {
  return (
    <div className="p-3">
      <div className="bg-white rounded section-body p-4">
        <div className="grid grid-cols-1 gap-4">
          <InputSelect
            field="changeStatus"
            options={costStatus}
            required
          />
        </div>
      </div>
      <div className="flex flex-row justify-end mt-4">
        <ButtonPrimary
          label="btnAdd"
        //   onClick={service.handleSubmit(service.onSubmit)}
        />
      </div>
    </div>
  );
}

export default ChangeCostStatus;
