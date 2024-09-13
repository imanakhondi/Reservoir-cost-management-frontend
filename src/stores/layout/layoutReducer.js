import utils from "../../utils";
import * as actions from "./layoutActions";

const initialState = {
  loading: false,
  locale: utils.initLocale(),
  modals: [],
  shownModal: null,
};

const layoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_LOADING_ACTION:
      return {
        ...state,
        loading: payload,
      };
    case actions.SET_LOCALE_ACTION:
      return {
        ...state,
        locale: payload,
      };
    case actions.SET_DROP_DOWN_ELEMENT_ACTION:
      return {
        ...state,
        dropDownElement: payload,
      };
    case actions.SET_SHOWN_MODAL_ACTION:
      if (payload === null || payload.modal === null) {
        let modals = [...state.modals];
        let shownModal = null;
        if (modals.length === 0) {
          shownModal = null;
        } else {
          modals.pop();
          shownModal = modals[modals.length - 1];
        }
        return {
          ...state,
          modals,
          shownModal,
        };
      } else {
        let modals = [...state.modals];
        if (modals.find((modal) => modal.modal === payload.modal)) {
          return {
            ...state,
          };
        }
        modals.push(payload);

        return {
          ...state,
          modals,
          shownModal: payload,
        };
      }
    default:
      return state;
  }
};

export default layoutReducer;
