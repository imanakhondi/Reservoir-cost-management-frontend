import React, { useEffect, useState } from "react";

import {
  AuthLayout,
  InputText,
  ButtonPrimary,
  InputDatePicker,
  InputSelect,
  InputFile,
} from "../../../../components";
import { useAddCostPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { Link } from "react-router-dom";
import utils from "../../../../utils";
import InputTextarea from "../../../../components/form/InputTextarea";

const costType = [
  {
    value: "tire",
    text: "tire",
  },
  {
    value: "pad",
    text: "pad",
  },
  {
    value: "brake",
    text: "brake",
  },
];

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

const tankNoOptions = {
  James: [
    { value: "001", text: "001" },
    { value: "002", text: "002" },
  ],
  Mary: [
    { value: "101", text: "101" },
    { value: "102", text: "102" },
  ],
  John: [
    { value: "201", text: "201" },
    { value: "202", text: "202" },
  ],
};

const AddCost = () => {
  const service = useAddCostPageService();
  const [selectedTankOwner, setSelectedTankOwner] = useState("");
  const [tankNoList, setTankNoList] = useState([]);

  const handleTankOwnerChange = (value) => {
    setSelectedTankOwner(value);
    setTankNoList(tankNoOptions[value] || []);
  };

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
              options={tankOwnerOptions}
              onChange={(e) => handleTankOwnerChange(e.target.value)}
              required
            />
            <InputSelect field="tankNo" options={tankNoList} required />
            <InputSelect field="serviceType" options={costType} required />
            <InputText field="approximateCost" type="number" required />
          </div>

          <h2 className="text-primary font-bold mt-6">
            {service.strings.header3}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <InputFile field="uploadDoc" />
          </div>
          <div className="">
            <InputTextarea field="costDescription" />
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

export default AddCost;
