import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { loginAdminSchema as schema } from "../validations";
import { usePage } from "../../../hooks";
import { login } from "../api/authApi";
import { loginAction, logoutAction } from "../../../stores/admin/adminActions";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { setLoadingAction } from "../../../stores/layout/layoutActions";

const useLoginPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const password = useRef(null);
  const [showPass, setShowPass] = useState(false);
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { loginAdminPage: strings } = utils.getLSLocale();

  usePage(PAGES.Login, form);

  useEffect(() => {
    password.current?.setAttribute("type", showPass ? "text" : "password");
  }, [showPass]);

  const onSubmit = (data) => {
    submit(data);
  };

  const submit = async (data) => {
    dispatch(setLoadingAction(true));
    const response = await login(data.username, data.password);

    if (response.result === API_RESULT_CODES.OK) {
      utils.setLSVariable("token", response.resultData.token.access_token);
      utils.setLSVariable(
        "admin",
        JSON.stringify(response.resultData.token.admin)
      );
      dispatch(
        loginAction({
          token: localStorage.getItem("token"),
          admin: localStorage.getItem("admin"),
        })
      );
      window.location.href = `/`;
    } else {
      dispatch(setLoadingAction(false));
      dispatch(logoutAction());
      utils.setMessageError(dispatch, response);
    }
  };

  return {
    password,
    showPass,
    setShowPass,
    strings,
    pageState,
    handleSubmit: form.handleSubmit,
    onSubmit,
  };
};

export default useLoginPageService;
