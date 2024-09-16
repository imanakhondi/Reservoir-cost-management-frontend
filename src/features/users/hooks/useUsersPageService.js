import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { API_RESULT_CODES, PAGE_ITEMS, PAGES } from "../../../types";
import { setShownModalAction } from "../../../stores/layout/layoutActions";
import { filterUsersSchema as schema } from "../validations";
import { search, searchWithProps } from "../api/usersApi";
import { useNavigate } from "react-router-dom";

const useUsersPageService = () => {
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
  const { usersPage: strings } = utils.getLSLocale();

  usePage(PAGES.Users, form);

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

  const addUser = (e) => {
    e.stopPropagation();
    navigate("/users/add");
  };

  const showModalFilter = () => {
    dispatch(setShownModalAction("filter-modal"));
  };

  const getSearchFields = (data) => {
    return {
      name: data.filterName?.length > 0 ? data.filterName : undefined,
      username:
        data.filterUsername?.length > 0 ? data.filterUsername : undefined,
      mobile: data.filterMobile?.length > 0 ? data.filterMobile : undefined,
      status: data.filterStatus?.length > 0 ? data.filterStatus : undefined,
      createdAt:
        data.filterCreatedAt?.length > 0 ? data.filterCreatedAt : undefined,
      birthDate:
        data.filterBirthDate?.length > 0 ? data.filterBirthDate : undefined,
      gender: data.filterGender?.length > 0 ? data.filterGender : undefined,
      jobTitle:
        data.filterJobTitle?.length > 0 ? data.filterJobTitle : undefined,
      province:
        data.filterProvince?.length > 0 ? data.filterProvince : undefined,
      city: data.filterCity?.length > 0 ? data.filterCity : undefined,
      skills: data.filterSkills?.length > 0 ? data.filterSkills : undefined,
    };
  };

  const onSubmit = async (data) => {
    handleSetBadge(data);
    dispatch(setShownModalAction(null));
    fetchItems(getSearchFields(data));
  };

  const handleSetBadge = (data) => {
    let value = 0;
    value += data.filterName ? 1 : 0;
    value += data.filterUsername ? 1 : 0;
    value += data.filterMobile ? 1 : 0;
    value += data.filterStatus?.length > 0 ? 1 : 0;
    value += data.filterCreatedAt ? 1 : 0;
    value += data.filterBirthDate ? 1 : 0;
    value += data.filterGender?.length > 0 ? 1 : 0;
    value += data.filterJobTitle?.length > 0 ? 1 : 0;
    value += data.filterProvince?.length > 0 ? 1 : 0;
    value += data.filterCity?.length > 0 ? 1 : 0;
    value += data.filterSkills?.length > 0 ? 1 : 0;

    setBadge(value);
  };

  const fetchItems = async (data) => {
    const response = await utils.postWithLoading(
      dispatch,
      search(
        data.name,
        data.username,
        data.mobile,
        data.status,
        data.createdAt,
        data.birthDate,
        data.gender,
        data.jobTitle,
        data.province,
        data.city,
        data.skills,
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
      let provinces = response.resultData.provinces?.map((province) => {
        return { value: province, text: province };
      });
      let cities = response.resultData.cities?.map((city) => {
        return { value: city, text: city };
      });
      let skills = response.resultData.skills?.map((skill) => {
        return { value: skill.id, text: skill.title };
      });
      setData({
        items: response.resultData.items,
        provinces,
        cities,
        skills,
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
    addUser,
    handleSubmit: form.handleSubmit,
    onSubmit,
    badge,
    data,
    pagination,
    setPagination,
    onChangePageItems,
  };
};

export default useUsersPageService;
