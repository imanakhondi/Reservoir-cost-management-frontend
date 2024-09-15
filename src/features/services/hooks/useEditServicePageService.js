import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { editServiceSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { edit, getServiceById } from "../api/servicesApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useAddServicePageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { editServicePage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceDescription: "",
  });

  usePage(PAGES.EditService, form);

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
          serviceName: serviceData.serviceName,
          serviceDescription: serviceData.serviceDescription,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showAddServiceModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (id, data) => {
    const response = await utils.postWithLoading(
      dispatch,
      edit(id, data.serviceName, data.serviceDescription)
    );

    if (response.result === API_RESULT_CODES.OK) {
      showAddServiceModal();
    } else {
      utils.setMessageError(dispatch, response);
    }
  };

  const onAddNextService = () => {
    dispatch(setShownModalAction(null));
    form.reset();
    document.querySelector("#mobile").focus();
  };

  return {
    strings,
    pageState,
    handleSubmit: form.handleSubmit,
    onSubmit,
    onAddNextService,
    formData,
    fetchServiceData,
    id
  };
};

export default useAddServicePageService;
