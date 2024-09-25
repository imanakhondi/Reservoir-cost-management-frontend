import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { editCostSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { edit, getCostById } from "../api/costsApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const useEditCostPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { editCostPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const [formData, setFormData] = useState({
    tankOwner: "",
    tankNo: "",
    serviceType: "",
    costDescription: "",
  });
  const [selectedTankOwner, setSelectedTankOwner] = useState("");
  const [tankNoList, setTankNoList] = useState([]);

  usePage(PAGES.EditCost, form);

  useEffect(() => {
    if (id) {
      fetchCostData();
    }
  }, [id]);

  const handleTankOwnerChange = (value) => {
    setSelectedTankOwner(value);
    setTankNoList(tankNoOptions[value] || []);
  };

  const fetchCostData = async () => {
    try {
      const response = await getCostById(id);

      if (response?.data) {
        const costData = response.data;
        setFormData({
          tankOwner: costData.tankOwner,
          tankNo: costData.tankNo,
          serviceType: costData.serviceType,
          approximateCost: costData.approximateCost,
          costDescription: costData.costDescription,
        });
        setSelectedTankOwner(costData.tankOwner);
        setTankNoList(tankNoOptions[costData.tankOwner] || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showAddCostModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (id, data) => {
    const response = await utils.postWithLoading(
      dispatch,
      edit(
        id,
        data.tankOwner,
        data.tankNo,
        data.serviceType,
        data.costDescription,
        data.uploadDoc
      )
    );

    if (response.result === API_RESULT_CODES.OK) {
      showAddCostModal();
    } else {
      utils.setMessageError(dispatch, response);
    }
  };

  const onAddNextCost = () => {
    dispatch(setShownModalAction(null));
    form.reset();
    document.querySelector("#mobile").focus();
  };

  return {
    strings,
    pageState,
    handleSubmit: form.handleSubmit,
    onSubmit,
    onAddNextCost,
    fetchCostData,
    formData,
    handleTankOwnerChange,
    tankNoList,
    costType,
    tankOwnerOptions,
    id,
  };
};

export default useEditCostPageService;
