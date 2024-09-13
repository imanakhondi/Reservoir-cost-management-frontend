import utils from "../../utils";

export const LOGIN_ADMIN_ACTION = "LOGIN_USER_ACTION";

export const loginAction = (token, admin) => async (dispatch) => {
  dispatch({ type: LOGIN_ADMIN_ACTION, payload: { token, admin } });
};

export const logoutAction = () => async () => {
  utils.clearLS();
};
