import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { addTankSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { add } from "../api/tanksApi";

const useAddTankPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { addTankPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  usePage(PAGES.AddTank, form);

  const showAddTankModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (data) => {
    const response = await utils.postWithLoading(
      dispatch,
      add(
        data.tankOwner,
        data.tankNo,
        data.oilTestExpiryDate,
        data.rahaneTestExpiryDate,
        data.capotageExpiryDate
      )
    );

    if (response.result === API_RESULT_CODES.OK) {
      showAddTankModal();
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
  };
};

export default useAddTankPageService;
