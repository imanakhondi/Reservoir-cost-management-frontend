import React, { useEffect, useState } from "react";

import {
  AuthLayout,
  InputText,
  ButtonPrimary,
  InputDatePicker,
  InputSelect,
  InputFile,
} from "../../../../components";
import { useAddCostPageService, useUpdateCostPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";
import { Link, useParams } from "react-router-dom";
import utils from "../../../../utils";
import InputTextarea from "../../../../components/form/InputTextarea";
import { getCostById } from "../../api/costsApi";
import useEditCostPageService from "../../hooks/useEditCostPageService";

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

const EditCost = () => {
  const service = useEditCostPageService();
  const [selectedTankOwner, setSelectedTankOwner] = useState("");
  const [tankNoList, setTankNoList] = useState([]);
  const { id } = useParams();
  console.log("params", id);

  const [formData, setFormData] = useState({
    tankOwner: "",
    tankNo: "",
    serviceType: "",
    costDescription: "",
  });

  const handleTankOwnerChange = (value) => {
    setSelectedTankOwner(value);
    setTankNoList(tankNoOptions[value] || []);
  };

  const fetchCostData = async () => {
    try {
      // const response = await getCostById(id);
      const response = {
        data: {
          tankOwner: "John",
          tankNo: "201",
          serviceType: "brake",
          costDescription: "لورم ایپسوم یک متن تصادفی هست",
        },
      };
      if (response?.data) {
        const costData = response.data;
        setFormData({
          tankOwner: costData.tankOwner,
          tankNo: costData.tankNo,
          serviceType: costData.serviceType,
          costDescription: costData.costDescription,
        });
        setSelectedTankOwner(costData.tankOwner);
        setTankNoList(tankNoOptions[costData.tankOwner] || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCostData();
    }
  }, [id]);

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
          <div className="grid grid-cols-3 gap-4">
            <InputSelect
              field="tankOwner"
              options={tankOwnerOptions}
              defaultValue={formData.tankOwner}
              onChange={(e) => handleTankOwnerChange(e.target.value)}
              required
            />
            <InputSelect
              field="tankNo"
              options={tankNoList}
              defaultValue={formData.tankNo}
              required
            />
            <InputSelect
              field="serviceType"
              options={costType}
              defaultValue={formData.serviceType}
              required
            />
          </div>

          <h2 className="text-primary font-bold mt-6">
            {service.strings.header3}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <InputFile field="uploadDoc" />
          </div>
          <div className="">
            <InputTextarea
              field="costDescription"
              defaultValue={formData.costDescription}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <ButtonPrimary
            label="btnAdd"
            onClick={() =>
              service.handleSubmit((data) => service.onSubmit(id, data))
            }
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default EditCost;
