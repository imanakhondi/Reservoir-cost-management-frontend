import React from "react";

import {
  AuthLayout,
  InputText,
  ButtonPrimary,
  InputDatePicker,
  InputSelect,
} from "../../../../components";
import { useAddTankPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { Link } from "react-router-dom";
import utils from "../../../../utils";

const tankOwner = [
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

const AddTank = () => {
  const service = useAddTankPageService();

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <InputText field="tankNo" required />
            <InputSelect field="tankOwner" options={tankOwner} required />
            <InputDatePicker field="oilTestExpiryDate" required />
            <InputDatePicker field="rahaneTestExpiryDate" required />
          </div>
          <h2 className="text-primary font-bold mt-6">
            {service.strings.header3}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <InputDatePicker field="capotageExpiryDate" />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <ButtonPrimary
            label="btnAdd"
            onClick={service.handleSubmit(service.onSubmit)}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default AddTank;
