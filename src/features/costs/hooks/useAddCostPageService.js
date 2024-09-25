import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { addCostSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { add } from "../api/costsApi";

const useAddCostPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { addCostPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  usePage(PAGES.AddCost, form);

  const showAddCostModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (data) => {
    const response = await utils.postWithLoading(
      dispatch,
      add(
        data.tankOwner,
        data.tankNo,
        data.serviceType,
        data.approximateCost,
        data.costDescription,
        data.uploadDoc,
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
  };
};

export default useAddCostPageService;
