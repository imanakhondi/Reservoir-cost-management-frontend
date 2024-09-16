import React from "react";

import {
  ModalAddUserPrompt,
  AuthLayout,
  InputCheckbox,
  InputSelect,
  InputText,
  ButtonPrimary,
} from "../../../../components";
import { useAddServicePageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { Link } from "react-router-dom";
import utils from "../../../../utils";
import { USER_PERMISSIONS, USER_TYPES } from "../../../../types";
import userTypes from "../../../../types/options/userTypes";
import InputTextarea from "../../../../components/form/InputTextarea";

const AddService = () => {
  const service = useAddServicePageService();

  return (
    <AuthLayout>
      {/* <ModalAddUserPrompt onAddNextUser={service.onAddNextUser} /> */}
      <div className="p-3">
        <div className="flex flex-row justify-start items-center gap-2 h-12 mb-2">
          <Link to={`/services`}>
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
            <InputText field="serviceName" required />
          </div>
          <h2 className="text-primary font-bold mt-6">
            {service.strings.header3}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div></div>
          </div>
          <div className="">
            <InputTextarea field="serviceDescription" />
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

export default AddService;
