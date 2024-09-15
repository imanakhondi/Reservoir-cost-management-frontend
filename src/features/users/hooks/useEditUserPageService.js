import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGES } from "../../../types";
import { editUserSchema as schema } from "../validations";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { edit, getUserById } from "../api/usersApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useEditUserPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const { editUserPage: strings } = utils.getLSLocale();
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const [formData, setFormData] = useState({
    mobile: "",
    nameFamily: "",
    username: "",
    email: "",
  });

  usePage(PAGES.EditUser, form);

  useEffect(() => {
    if (id) {
      fetchUserData();
    }
  }, [id]);

  const fetchUserData = async () => {
    try {
      const response = await getUserById(id);

      if (response?.data) {
        const serviceData = response.data;
        setFormData({
          mobile: serviceData.mobile,
          nameFamily: serviceData.nameFamily,
          username: serviceData.username,
          email: serviceData.email,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const showEditUserModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onSubmit = async (id, data) => {
    const response = await utils.postWithLoading(
      dispatch,
      edit(
        id,
        data.mobile,
        data.nameFamily,
        data.username,
        data.permisssions,
        data.email,
        data.type
      )
    );

    if (response.result === API_RESULT_CODES.OK) {
      showEditUserModal();
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
    handleSubmit: form.handleSubmit,
    onSubmit,
    onAddNextUser,
    formData,
    fetchUserData,
    id,
  };
};

export default useEditUserPageService;
