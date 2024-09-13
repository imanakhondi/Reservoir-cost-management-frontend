import utils from "../../utils";
import * as actions from "./adminActions";

const initialState = {
  token: localStorage.getItem("token") ?? null,
  admin: utils.getLSAdmin() ?? null,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.LOGIN_ADMIN_ACTION:
      return {
        ...state,
        token: payload.token,
        admin: payload.admin,
      };
    default:
      return state;
  }
};

export default adminReducer;
