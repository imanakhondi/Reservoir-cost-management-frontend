import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { addServiceSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { add } from "../api/servicesApi";

const useAddServicePageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { addServicePage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  usePage(PAGES.AddService, form);

  const showAddServiceModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (data) => {
    console.log("data",data);
    const response = await utils.postWithLoading(
      dispatch,
      add(
        data.serviceName,
        data.serviceDescription
      )
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
  };
};

export default useAddServicePageService;
