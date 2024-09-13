import React from "react";

import { GuestLayout } from "../../../../components";
import { Button, InputText } from "../../../../components";
import { useLoginPageService } from "../../hooks";
import Svg, { SvgPath } from "../../../../components/svg";

const Login = () => {
  const service = useLoginPageService();

  return (
    <GuestLayout title={service.strings._title}>
      <InputText field="username" />
      <InputText
        field="password"
        type="password"
        innerRef={service.password}
        icon={
          <Svg
            SvgPath={<SvgPath.SvgView pathClassName={"stroke-deactive"} />}
            width="16"
            height="16"
            viewBox={"0 0 16 16"}
            className="icon-complex icon-link cursor-pointer"
            onClick={() => service.setShowPass(!service.showPass)}
          />
        }
      />
      <Button
        label="login"
        className="bg-primary w-full text-white text-base"
        onClick={service.handleSubmit(service.onSubmit)}
      />
      <a
        href="#"
        className="block w-full text-center text-primary text-xs mt-4 mb-1"
        title={service.strings.forgotPassword}
      >
        {service.strings.forgotPassword}
      </a>
    </GuestLayout>
  );
};

export default Login;
