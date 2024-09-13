import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const InputFile = ({
  field,
  accept = "*",
  onChangeFile,
  useForm,
  inputStyle = {},
  containerClassName="my-4",
}) => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const [form, setForm] = useState(useForm);

  useEffect(() => {
    if (!useForm) {
      setForm(pageState?.useForm);
    }
  }, [pageState]);

  const renderItem = () => (
    <div className={containerClassName}>
      <input
        type="file"
        {...form?.register(`${field}`)}
        id={field}
        disabled={layoutState?.loading}
        accept={accept}
        onChange={(e) => onChangeFile(e)}
        style={{ ...inputStyle }}
      />
    </div>
  );

  return renderItem();
};

export default InputFile;
