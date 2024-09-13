import { useDispatch } from "react-redux";

import { setLoadingAction } from "../stores/layout/layoutActions";
import { post } from "../lib";

const usePost = async (url, data) => {
  const dispatch = useDispatch();

  dispatch(setLoadingAction(true));
  const result = await post(url, data);
  dispatch(setLoadingAction(true));

  return { result };
};

export default usePost;
