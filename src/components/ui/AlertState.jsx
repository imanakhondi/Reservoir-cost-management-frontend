import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { MESSAGE_TYPES } from "../../types";

const AlertState = () => {
  const messageState = useSelector((state) => state.messageReducer);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(0);

  useEffect(() => {
    if (
      messageState?.messageType === MESSAGE_TYPES.ERROR ||
      messageState?.messageType === MESSAGE_TYPES.SUCCESS
    ) {
      try {
        if (messageState?.message) {
          if (
            !messageState?.messageField ||
            (messageState?.messageField &&
              !document.querySelector(`#${messageState?.messageField}`))
          ) {
            setMessage(messageState?.message.toString());
            setType(messageState?.messageType);
          }
        }
      } catch {}
    } else {
      setMessage(null);
    }
  }, [messageState]);

  useEffect(() => {
    if (message) {
      window.scrollTo(0, 0);
    }
  }, [message]);

  if (message) {
    return (
      <div
        className={`w-full m-3 p-3 border rounded ${
          type === MESSAGE_TYPES.ERROR
            ? "border-warning bg-warning-light text-warning"
            : "border-success bg-success-light text-success"
        }`}
      >
        {message}
      </div>
    );
  }

  return <></>;
};

export default AlertState;
