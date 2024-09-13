import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const InputCheckbox = ({
  name,
  field,
  useForm,
  strings,
  onChange = null,
  containerClassName = "",
  value = "",
}) => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const [label, setLabel] = useState(
    strings && field in strings ? strings[field] : ""
  );
  const [form, setForm] = useState(useForm);

  useEffect(() => {
    if (!strings) {
      setLabel(
        pageState?.strings && field in pageState.strings
          ? pageState?.strings[field]
          : ""
      );
    }

    if (!useForm) {
      setForm(pageState?.useForm);
    }
  }, [pageState]);

  const handleChange = (e) => {
    let values = form
      ? Array.isArray(form.getValues(name))
        ? [...form.getValues(name)]
        : []
      : [];
    values = values.filter((value) => value !== e.target.value);

    if (e.target.checked) {
      values = [...values, e.target.value];
    }

    form?.setValue(name, values.length > 0 ? values : false);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`flex flex-row gap-2 ${containerClassName}`}>
      <input
        {...form?.register(name)}
        id={field}
        name={name}
        value={value}
        type="checkbox"
        disabled={layoutState?.loading}
        className="cursor-pointer"
        onChange={handleChange}
      />
      <label htmlFor={field} className="cursor-pointer text-xs text-subline">
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
