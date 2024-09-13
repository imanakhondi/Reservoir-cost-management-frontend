import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import utils from "../utils";
import {
  changePageAction,
  setPagePropsAction,
} from "../stores/page/pageActions";
import { setMessageAction } from "../stores/message/messageActions";
import { MESSAGE_CODES, MESSAGE_TYPES } from "../types";

const usePage = (page, useForm = null, props = {}) => {
  const pageState = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();
  const lang = utils.getLSLocale();
  const strings = page && page in lang ? lang[page] : null;

  useEffect(() => {
    dispatch(changePageAction(page, strings, useForm));

    if (props != {}) {
      dispatch(setPagePropsAction(props));
    }
  }, []);

  useEffect(() => {
    if (
      typeof pageState?.useForm?.formState?.errors === "object" &&
      pageState?.useForm?.formState?.errors
    ) {
      const hasKeys = !!Object.keys(pageState?.useForm?.formState?.errors)
        .length;
      if (hasKeys) {
        dispatch(
          setMessageAction(
            pageState?.useForm?.formState?.errors[
              Object.keys(pageState?.useForm?.formState?.errors)[0]
            ].message,
            MESSAGE_TYPES.ERROR,
            MESSAGE_CODES.FORM_INPUT_INVALID,
            true,
            Object.keys(pageState?.useForm?.formState?.errors)[0]
          )
        );
      }
    }
  }, [pageState?.useForm?.formState?.errors]);
};

export default usePage;
