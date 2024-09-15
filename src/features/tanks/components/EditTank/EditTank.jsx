import React from "react";

import {
  AuthLayout,
  InputText,
  ButtonPrimary,
  InputDatePicker,
  InputSelect,
} from "../../../../components";
import { useEditTankPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { Link } from "react-router-dom";


const tankOwnerOptions = [
  {
    value: "James",
    text: "James D",
  },
  {
    value: "Mary",
    text: "Mary A",
  },
  {
    value: "John",
    text: "John K",
  },
];

const EditTank = () => {
  const service = useEditTankPageService();

  return (
    <AuthLayout>
      {/* <ModalAddUserPrompt onAddNextUser={service.onAddNextUser} /> */}
      <div className="p-3">
        <div className="flex flex-row justify-start items-center gap-2 h-12 mb-2">
          <Link to={`/tanks`}>
            <Svg
              SvgPath={<SvgPath.SvgChevronDown />}
              width="24"
              height="24"
              className="icon -rotate-90 hover:fill-primary"
            />
          </Link>
          <h1 className="font-bold">{service.strings._title}</h1>
        </div>
        <div className="bg-white rounded section-body p-4">
          <h2 className="text-primary font-bold">{service.strings.header1}</h2>
          <div className="grid grid-cols-3 gap-4">
            <InputText
              field="tankNo"
              defaultValue={service.formData.tankNo}
              required
            />
            <InputSelect
              field="tankOwner"
              options={tankOwnerOptions}
              defaultValue={service.formData.tankOwner}
              required
            />
            <InputDatePicker
              field="oilTestExpiryDate"
              defaultValue={service.formData.oilTestExpiryDate}
              required
            />
            <InputDatePicker
              field="rahaneTestExpiryDate"
              defaultValue={service.formData.rahaneTestExpiryDate}
              required
            />
          </div>
          <h2 className="text-primary font-bold mt-6">
            {service.strings.header3}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <InputDatePicker
              field="capotageExpiryDate"
              defaultValue={service.formData.capotageExpiryDate}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <ButtonPrimary
            label="btnAdd"
            onClick={service.handleSubmit((data) => service.onSubmit(service.id, data))}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default EditTank;
