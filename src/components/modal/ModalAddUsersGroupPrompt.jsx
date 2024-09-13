import React from "react";
import { useDispatch } from "react-redux";

import { ModalPrompt, ButtonWhite } from "..";
import utils from "../../utils";
import { setShownModalAction } from "../../stores/layout/layoutActions";

const ModalAddUsersGroupPrompt = ({ result, onClose }) => {
  const dispatch = useDispatch();
  const { modalAddUsersGroupPrompt: strings } = utils.getLSLocale();

  const renderFooter = () => {
    return (
      <div className="flex flex-row justify-end items-center">
        <ButtonWhite
          strings={strings}
          label="closeBtn"
          className="px-8"
          onClick={() => {
            if (onClose) {
              onClose();
            }

            dispatch(setShownModalAction(null));
          }}
        />
      </div>
    );
  };

  return (
    <ModalPrompt
      strings={strings}
      renderFooter={renderFooter}
      onCancel={() => {
        if (onClose) {
          onClose();
        }
      }}
    >
      <div className="p-8 flex flex-col justify-center items-center gap-4">
        <div className="grid grid-cols-3 w-full gap-2 h-24">
          <div className="border border-border-line rounded p-2 flex flex-col items-center justify-center gap-1">
            <p className="text-3xl text-primary font-bold">
              {utils.localeDigits(result?.addedUsers ?? "")}
            </p>
            <p className="text-sm font-medium text-subline">
              {strings.addedUsers}
            </p>
          </div>
          <div className="border border-border-line rounded p-2 flex flex-col items-center justify-center gap-1">
            <p className="text-3xl text-success font-bold">
              {utils.localeDigits(result?.updatedUsers ?? "")}
            </p>
            <p className="text-sm font-medium text-subline">
              {strings.updatedUsers}
            </p>
          </div>
          <div className="border border-border-line rounded p-2 flex flex-col items-center justify-center gap-1">
            <p className="text-3xl text-warning font-bold">
              {utils.localeDigits(result?.errorsOccured ?? "")}
            </p>
            <p className="text-sm font-medium text-subline flex flex-row gap-1">
              <span>{strings.errorsOccured}</span>
              <a href="#" target="_blank" className=" text-primary">
                (<span className="underline">{strings.downloadErrors}</span>)
              </a>
            </p>
          </div>
        </div>
        <span className="text-subline text-sm">{strings.resultText}</span>
      </div>
    </ModalPrompt>
  );
};

export default ModalAddUsersGroupPrompt;
