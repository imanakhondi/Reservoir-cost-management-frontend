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
import { filterUsersSchema as schema } from "../validations";
import { search, searchWithProps } from "../api/servicesApi";
import { useNavigate } from "react-router-dom";

const useServicesPageService = () => {
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
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { servicesPage: strings } = utils.getLSLocale();

  usePage(PAGES.Services, form);

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

  const addService = (e) => {
    e.stopPropagation();

    return navigate("/services/add");
  };

  const showModalFilter = () => {
    dispatch(setShownModalAction("filter-modal"));
  };

  const getSearchFields = (data) => {
    return {
      serviceName:
        data.filterServiceName?.length > 0 ? data.filterServiceName : undefined,
    };
  };

  const onSubmit = async (data) => {
    handleSetBadge(data);
    dispatch(setShownModalAction(null));
    fetchItems(getSearchFields(data));
  };

  const handleSetBadge = (data) => {
    let value = 0;
    value += data.filterServiceName ? 1 : 0;

    setBadge(value);
  };

  const fetchItems = async (data) => {
    const response = await utils.postWithLoading(
      dispatch,
      search(data.serviceName, pagination?.pageNo, pagination?.pageItems)
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
      setData({
        items: response.resultData.items,
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
    addService,
    handleSubmit: form.handleSubmit,
    onSubmit,
    badge,
    data,
    pagination,
    setPagination,
    onChangePageItems,
    navigate
  };
};

export default useServicesPageService;
