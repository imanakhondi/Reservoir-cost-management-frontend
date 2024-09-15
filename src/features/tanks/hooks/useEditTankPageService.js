import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { editTankSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { edit } from "../api/tanksApi";
import { useEffect, useState } from "react";
import { getServiceById } from "../../services/api/servicesApi";
import { useParams } from "react-router-dom";

const useEditTankPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { editTankPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const [formData, setFormData] = useState({
    tankNo: "",
    tankOwner: "",
    oilTestExpiryDate: null,
    rahaneTestExpiryDate: null,
    capotageExpiryDate: null,
  });

  usePage(PAGES.EditTank, form);

  useEffect(() => {
    if (id) {
      fetchServiceData();
    }
  }, [id]);

  const fetchServiceData = async () => {
    try {
      const response = await getServiceById(id);

      if (response?.data) {
        const serviceData = response.data;

        setFormData({
          tankNo: serviceData.tankNo,
          tankOwner: serviceData.tankOwner,
          oilTestExpiryDate: serviceData.oilTestExpiryDate,
          rahaneTestExpiryDate: serviceData.rahaneTestExpiryDate,
          capotageExpiryDate: serviceData.capotageExpiryDate,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showEditTankModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (id, data) => {
    const response = await utils.postWithLoading(
      dispatch,
      edit(
        id,
        data.tankOwner,
        data.tankNo,
        data.oilTestExpiryDate,
        data.rahaneTestExpiryDate,
        data.capotageExpiryDate
      )
    );

    if (response.result === API_RESULT_CODES.OK) {
      showEditTankModal();
    } else {
      utils.setMessageError(dispatch, response);
    }
  };

  const onAddNextTank = () => {
    dispatch(setShownModalAction(null));
    form.reset();
    document.querySelector("#mobile").focus();
  };

  return {
    strings,
    pageState,
    handleSubmit: form.handleSubmit,
    onSubmit,
    onAddNextTank,
    fetchServiceData,
    formData,
    id,
  };
};

export default useEditTankPageService;
