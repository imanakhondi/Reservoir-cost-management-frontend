import React from "react";

import {
  ModalAddUserPrompt,
  AuthLayout,
  InputText,
  ButtonPrimary,
} from "../../../../components";
import { useEditUserPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { Link } from "react-router-dom";

const EditUser = () => {
  const service = useEditUserPageService();

  return (
    <AuthLayout>
      <ModalAddUserPrompt onAddNextUser={service.onAddNextUser} />
      <div className="p-3">
        <div className="flex flex-row justify-start items-center gap-2 h-12 mb-2">
          <Link to={`/users`}>
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
            <InputText
              field="mobile"
              defaultValue={service.formData.mobile}
              required
            />
            <InputText
              field="nameFamily"
              defaultValue={service.formData.nameFamily}
              required
            />
            <InputText
              field="username"
              defaultValue={service.formData.username}
              required
            />
          </div>
          <h2 className="text-primary font-bold mt-6">
            {service.strings.header3}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <InputText field="email" defaultValue={service.formData.email} />

            <div></div>
          </div>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <ButtonPrimary
            label="btnAdd"
            onClick={service.handleSubmit((data) =>
              service.onSubmit(service.id, data)
            )}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default EditUser;
