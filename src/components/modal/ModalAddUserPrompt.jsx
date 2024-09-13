import React from "react";

import { ModalPrompt, ButtonWhite } from "..";
import utils from "../../utils";
import Svg, { SvgPath } from "../svg";

const ModalAddUserPrompt = ({ onAddNextUser }) => {
  const { modalAddUserPrompt: strings } = utils.getLSLocale();

  const renderFooter = () => {
    return (
      <div className="flex flex-row justify-end items-center gap-2">
        <ButtonWhite
          strings={strings}
          label="addNextUserBtn"
          className="px-2"
          onClick={() => {
            if (onAddNextUser) {
              onAddNextUser();
            }
          }}
          beforeIcon={
            <Svg
              SvgPath={
                <SvgPath.SvgCirclePlus pathClassName={"stroke-subline"} />
              }
              width="24"
              height="24"
              className="icon-complex"
              viewBox={"0 0 16 16"}
            />
          }
        />
        <ButtonWhite
          strings={strings}
          label="editUserBtn"
          className="px-2"
          beforeIcon={
            <Svg
              SvgPath={<SvgPath.SvgEdit pathClassName={"stroke-subline"} />}
              width="24"
              height="24"
              className="icon-complex"
              viewBox={"0 0 20 20"}
            />
          }
        />
      </div>
    );
  };

  return (
    <ModalPrompt strings={strings} renderFooter={renderFooter}>
      <div className="p-8 flex flex-col justify-center items-center gap-4">
        <Svg
          SvgPath={<SvgPath.SvgUserAdd />}
          width="124"
          height="124"
          className="icon-complex"
          viewBox={"0 0 124 124"}
        />
        <span className="text-subline text-base font-bold">
          {strings.userAdded}
        </span>
      </div>
    </ModalPrompt>
  );
};

export default ModalAddUserPrompt;
