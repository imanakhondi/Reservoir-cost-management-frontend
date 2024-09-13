import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { addUserSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { add } from "../api/usersApi";

const useAddUserPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { addUserPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });

  usePage(PAGES.AddUser, form);

  const onSelectAll = (e) => {
    if (e.target.checked) {
      form.setValue(
        "permissions",
        [...document.getElementsByName("permissions")].map(
          (element) => element.value
        )
      );
    } else {
      form.setValue("permissions", false);
    }
  };

  const showAddUserModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (data) => {
console.log("data",data);


    const response = await utils.postWithLoading(
      dispatch,
      add(
        data.mobile,
        data.nameFamily,
        data.username,
        data.permisssions,
        data.email,
        data.type
      )
    );

    if (response.result === API_RESULT_CODES.OK) {
      showAddUserModal();
    } else {
      utils.setMessageError(dispatch, response);
    }
  };

  const onAddNextUser = () => {
    dispatch(setShownModalAction(null));
    form.reset();
    document.querySelector("#mobile").focus();
  };

  return {
    strings,
    pageState,
    onSelectAll,
    handleSubmit: form.handleSubmit,
    onSubmit,
    onAddNextUser,
  };
};

export default useAddUserPageService;
