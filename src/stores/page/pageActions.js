export const CHANGE_PAGE_ACTION = "CHANGE_PAGE_ACTION";
export const SET_PAGE_PROPS_ACTION = "SET_PAGE_PROPS_ACTION";

export const changePageAction =
  (page, strings = null, useForm = null) =>
  async (dispatch) => {
    dispatch({
      type: CHANGE_PAGE_ACTION,
      payload: { page, strings, useForm },
    });
  };

export const setPagePropsAction = (props) => async (dispatch) => {
  dispatch({ type: SET_PAGE_PROPS_ACTION, payload: props });
};
