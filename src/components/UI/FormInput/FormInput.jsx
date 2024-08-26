import { useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import clsx from "clsx";
import css from "./FormInput.module.css";

const FormInput = ({
  name,
  placeholder,
  type = "text",
  className = "",
  successText = "",
  setSuccessText = null,
}) => {
  const {
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const [initialValue, setInitialValue] = useState("");
  useEffect(() => {
    const currentValue = getValues(name) || "";
    setInitialValue(currentValue);
  }, [getValues, name]);

  const handleFocus = () => {
    if (setSuccessText) setSuccessText("");
  };

  const errorText = errors[name]?.message || "";

  return (
    <div className={css.wrapper}>
      <Controller
        name={name}
        control={control}
        defaultValue={initialValue}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            className={clsx(
              css.input,
              errors[name] && css.error,
              className,
              successText && !errors[name] && css.success
            )}
            onFocus={handleFocus}
            {...field}
          />
        )}
      />
      {errorText && <span className={css.errorMsg}>{errorText}</span>}
      {successText && !errorText && (
        <span className={css.successMsg}>{successText}</span>
      )}
    </div>
  );
};

export default FormInput;
