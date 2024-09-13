import utils from "../../utils";

export const SET_LOADING_ACTION = "SET_LOADING_ACTION";
export const SET_LOCALE_ACTION = "SET_LOCALE_ACTION";
export const SET_DROP_DOWN_ELEMENT_ACTION = "SET_DROP_DOWN_ELEMENT_ACTION";
export const SET_SHOWN_MODAL_ACTION = "SET_SHOWN_MODAL_ACTION";

export const setLoadingAction = (loading) => async (dispatch) => {
  dispatch({
    type: SET_LOADING_ACTION,
    payload: loading,
  });
};

export const setLocaleAction = (locale) => async (dispatch) => {
  utils.setLSVariable("locale", locale);
  dispatch({
    type: SET_LOCALE_ACTION,
    payload: locale,
  });
};

export const setDropDownElementAction = (element) => async (dispatch) => {
  dispatch({
    type: SET_DROP_DOWN_ELEMENT_ACTION,
    payload: element,
  });
};

export const setShownModalAction =
  (modal, props = null) =>
  async (dispatch) => {
    dispatch({
      type: SET_SHOWN_MODAL_ACTION,
      payload: { modal, props },
    });
  };
