import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  AuthBlankLayout,
  GuestBlankLayout,
  ButtonPrimaryComplex,
} from "../../../components";
import { changePageAction } from "../../../stores/page/pageActions";
import utils from "../../../utils";
import Svg, { SvgPath } from "../../../components/svg";

const Error404 = () => {
  const adminState = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = "error404Page";
  const lang = utils.getLSLocale();
  const strings = page && page in lang ? lang[page] : null;

  useEffect(() => {
    dispatch(changePageAction(page));
  }, []);

  const renderContent = (title, link) => (
    <div className="flex flex-col justify-center items-center gap-6">
      <Svg
        SvgPath={<SvgPath.SvgIcon404 />}
        width="372"
        height="147"
        className="icon-complex"
        viewBox={"0 0 372 147"}
      />
      <h1 className="mt-10 text-subline font-medium text-xl">
        {strings.title}
      </h1>
      <ButtonPrimaryComplex title={title} onClick={() => navigate(`${link}`)}>
        <span>{title}</span>
        <Svg
          SvgPath={<SvgPath.SvgChevronDown />}
          width="24"
          height="24"
          className="rotate-90 fill-white"
        />
      </ButtonPrimaryComplex>
    </div>
  );

  if (adminState?.admin) {
    return (
      <AuthBlankLayout>
        {renderContent(strings.authBtnBack, `/`)}
      </AuthBlankLayout>
    );
  }

  return (
    <GuestBlankLayout>
      {renderContent(strings.guestBtnBack, `/admins/login`)}
    </GuestBlankLayout>
  );
};

export default Error404;
