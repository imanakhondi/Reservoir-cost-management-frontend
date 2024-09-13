import * as actions from "./pageActions";

const initialState = {
  page: "",
  strings: {},
  useForm: null,
  props: {},
};

const pageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CHANGE_PAGE_ACTION:
      if (
        state.page === payload.page &&
        state.strings === payload.strings &&
        state.useForm === payload.useForm
      ) {
        
        return state;
      }
      
      return {
        ...state,
        page: payload?.page,
        strings: payload?.strings,
        useForm: payload?.useForm,
      };
      case actions.SET_PAGE_PROPS_ACTION:
      
      return {
        ...state,
        props: payload?.props,
      };
    default:
      return state;
  }
};

export default pageReducer;
