import React from "react";

import {
  AuthLayout,
  ButtonPrimary,
  InputSelect,
  InputFile,
} from "../../../../components";
import {  useEditCostPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { Link } from "react-router-dom";
import utils from "../../../../utils";
import InputTextarea from "../../../../components/form/InputTextarea";


const EditCost = () => {
  const service = useEditCostPageService();
 
  return (
    <AuthLayout>
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
            <InputSelect
              field="tankOwner"
              options={service.tankOwnerOptions}
              defaultValue={service.formData.tankOwner}
              onChange={(e) => service.handleTankOwnerChange(e.target.value)}
              required
            />
            <InputSelect
              field="tankNo"
              options={service.tankNoList}
              defaultValue={service.formData.tankNo}
              required
            />
            <InputSelect
              field="serviceType"
              options={service.costType}
              defaultValue={service.formData.serviceType}
              required
            />
          </div>

          <h2 className="text-primary font-bold mt-6">
            {service.strings.header3}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <InputFile field="uploadDoc" />
          </div>
          <div className="">
            <InputTextarea
              field="costDescription"
              defaultValue={service.formData.costDescription}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <ButtonPrimary
            label="btnAdd"
            onClick={() =>
              service.handleSubmit((data) => service.onSubmit(service.id, data))
            }
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default EditCost;
