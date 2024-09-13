import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGE_ITEMS, PAGES } from "../../../types";
import {
  setDropDownElementAction,
  setShownModalAction,
} from "../../../stores/layout/layoutActions";
import { filterTanksSchema as schema } from "../validations";
import { search, searchWithProps } from "../api/tanksApi";

const useTanksPageService = () => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const [badge, setBadge] = useState(0);
  const [data, setData] = useState([]);
  const [propsLoaded, setPropsLoaded] = useState(false);
  const [pagination, setPagination] = useState({
    pageNo: 1,
    pageItems: PAGE_ITEMS.ITEMS_10,
    count: 0,
  });
  const dispatch = useDispatch();
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { tanksPage: strings } = utils.getLSLocale();

  usePage(PAGES.Tanks, form);

  useEffect(() => {
    // fetchItemsWithProps();
  }, []);

  useEffect(() => {
    if (
      propsLoaded &&
      (pagination.pageNo - 1) * pagination.pageItems <= pagination.count
    ) {
      form.handleSubmit(onSubmit)();
    }
  }, [pagination.pageNo, pagination.pageItems]);

  const toggleAddTankDropdown = (e) => {
    e.stopPropagation();
    const element = document.querySelector("#add-user-menu").lastChild;

    if (layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);

      if (layoutState?.dropDownElement === element) {
        dispatch(setDropDownElementAction(null));

        return;
      }
    }

    dispatch(setDropDownElementAction(element));
    slideDown(element, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const showModalFilter = () => {
    dispatch(setShownModalAction("filter-modal"));
  };

  const getSearchFields = (data) => {
    return {
      tankNo: data.filterTankNo?.length > 0 ? data.filterTankNo : undefined,
      tankOwner:
        data.filterTankOwner?.length > 0 ? data.filterTankOwner : undefined,
    };
  };

  const onSubmit = async (data) => {
    handleSetBadge(data);
    dispatch(setShownModalAction(null));
    fetchItems(getSearchFields(data));
  };

  const handleSetBadge = (data) => {
    let value = 0;
    value += data.filterTankNo ? 1 : 0;
    value += data.filterTankOwner ? 1 : 0;

    setBadge(value);
  };

  const fetchItems = async (data) => {
    const response = await utils.postWithLoading(
      dispatch,
      search(
        data.tankOwner,
        data.tankNo,
        pagination?.pageNo,
        pagination?.pageItems
      )
    );

    if (response.result === API_RESULT_CODES.OK) {
      setData(response.resultData);
    } else {
      utils.setMessageError(dispatch, response);
    }
  };

  const fetchItemsWithProps = async () => {
    const response = await utils.postWithLoading(dispatch, searchWithProps());

    if (response.result === API_RESULT_CODES.OK) {
      let AllTankOwner = response.resultData.AllTankOwner?.map((tankOwner) => {
        return { value: tankOwner, text: tankOwner };
      });
      setData({
        items: response.resultData.items,
        AllTankOwner,
      });
      setPropsLoaded(true);
      setPagination({
        pageNo: response.resultData.pagination.pageNo,
        pageItems: response.resultData.pagination.pageItems,
        count: response.resultData.pagination.count,
      });
    } else {
      utils.setMessageError(dispatch, response);
    }
  };

  const onChangePageItems = (e) => {
    if (pagination.pageNo) {
      setPagination({ ...pagination, pageItems: parseInt(e.target.value) });
    }
  };

  return {
    strings,
    showModalFilter,
    toggleAddTankDropdown,
    handleSubmit: form.handleSubmit,
    onSubmit,
    badge,
    data,
    pagination,
    setPagination,
    onChangePageItems,
  };
};

export default useTanksPageService;
