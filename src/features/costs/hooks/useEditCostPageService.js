import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { editCostSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { edit } from "../api/costsApi";

const useEditCostPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { editCostPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  usePage(PAGES.EditCost, form);

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
  };
};

export default useEditCostPageService;
