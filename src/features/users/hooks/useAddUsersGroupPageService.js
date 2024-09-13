import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import {
  API_RESULT_CODES,
  MESSAGE_CODES,
  MESSAGE_TYPES,
  PAGES,
  UPLOAD_STATUS,
} from "../../../types";
import { addUsersGroupSchema as schema } from "../validations";
import { setMessageAction } from "../../../stores/message/messageActions";
import { addGroup } from "../api/usersApi";
import { setShownModalAction } from "../../../stores/layout/layoutActions";

const useAddUsersGroupPageService = () => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const [csvFile, setCsvFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(UPLOAD_STATUS.NOT_UPLOADED);
  const [uploadedResult, setUploadedResult] = useState(
    UPLOAD_STATUS.NOT_UPLOADED
  );
  const { addUsersGroupPage: strings, validation } = utils.getLSLocale();
  const form = useForm({ resolver: yupResolver(schema) });

  usePage(PAGES.AddUsersGroup, form);

  useEffect(() => {
    if (
      typeof form?.formState?.errors === "object" &&
      form?.formState?.errors
    ) {
      const hasKeys = !!Object.keys(form?.formState?.errors).length;
      if (hasKeys) {
        dispatch(
          setMessageAction(
            form?.formState?.errors[Object.keys(form?.formState?.errors)[0]]
              .message,
            MESSAGE_TYPES.ERROR,
            MESSAGE_CODES.FORM_INPUT_INVALID,
            true
          )
        );
      }
    }
  }, [form?.formState?.errors]);

  useEffect(() => {
    if (csvFile) {
      if (
        [
          "text/csv",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ].includes(csvFile.type)
      ) {
        form.setValue("csvFile", csvFile);
        form.handleSubmit(onSubmit)();
      } else {
        setCsvFile(null);
        dispatch(
          setMessageAction(
            validation.fileTypeMessage,
            MESSAGE_TYPES.ERROR,
            MESSAGE_CODES.FORM_INPUT_INVALID
          )
        );
      }
    }
  }, [csvFile]);

  const onChangeCsvFile = (e) => {
    setCsvFile(e?.target?.files[0]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    document
      .querySelector(`.drop-area`)
      .parentElement.classList.remove("bg-primary-light");
    document
      .querySelector(`.drop-area`)
      .parentElement.classList.add("bg-primary-lighter");

    if (e.dataTransfer?.files?.length > 0) {
      setCsvFile(e.dataTransfer?.files[0]);
    }
  };

  const onDragEnter = () => {
    document
      .querySelector(`.drop-area`)
      .parentElement.classList.remove("bg-primary-lighter");
    document
      .querySelector(`.drop-area`)
      .parentElement.classList.add("bg-primary-light");
  };

  const onDragLeave = () => {
    document
      .querySelector(`.drop-area`)
      .parentElement.classList.remove("bg-primary-light");
    document
      .querySelector(`.drop-area`)
      .parentElement.classList.add("bg-primary-lighter");
  };

  const onSubmit = async (data) => {
    setUploadStatus(UPLOAD_STATUS.UPLOADING);
    const response = await utils.postWithLoading(
      dispatch,
      addGroup(data.csvFile)
    );

    if (response.result === API_RESULT_CODES.OK) {
      setUploadStatus(UPLOAD_STATUS.UPLOADED_OK);
      setUploadedResult({
        addedUsers: 149,
        updatedUsers: 23,
        errorsOccured: 11,
      });
      showAddUsersGroupModal();
    } else {
      setUploadStatus(UPLOAD_STATUS.UPLOADED_ERROR);
      utils.setMessageError(dispatch, response);
    }
  };

  const showAddUsersGroupModal = () => {
    dispatch(setShownModalAction("prompt-modal"));
  };

  const onCloseModal = () => {
    setUploadStatus(UPLOAD_STATUS.NOT_UPLOADED);
  };

  return {
    strings,
    pageState,
    onChangeCsvFile,
    onDragOver,
    onDrop,
    onDragEnter,
    onDragLeave,
    csvFile,
    uploadStatus,
    uploadedResult,
    onCloseModal,
  };
};

export default useAddUsersGroupPageService;
