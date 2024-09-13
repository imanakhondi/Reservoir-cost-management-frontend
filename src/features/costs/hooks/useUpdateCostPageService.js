import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { updateCostSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { add, update } from "../api/costsApi";

const useUpdateCostPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { updateCostPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  usePage(PAGES.UpdateCost, form);

  const showAddCostModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (id,data) => {
    const response = await utils.postWithLoading(
      dispatch,
      update(
        id,
        data.tankOwner,
        data.tankNo,
        data.serviceType,
        data.costDescription,
        data.uploadDoc,
        data.cost,
        data.costDate,
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

export default useUpdateCostPageService;
