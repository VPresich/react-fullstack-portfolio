import { useState, useRef, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import clsx from "clsx";
import css from "./FormInput.module.css";

const FormInput = ({
  name,
  placeholder,
  type = "text",
  className = "",
  successText = "",
}) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.dataset.originalValue = inputRef.current.value;
    }
  }, []);

  const errorText = errors[name]?.message || "";

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (inputRef.current) {
      setValue(name, inputRef.current.dataset.originalValue);
    }
  };

  const handleChange = (e) => {
    if (inputRef.current) {
      inputRef.current.dataset.originalValue = e.target.value;
    }
  };

  const getTruncatedValue = () => {
    if (inputRef.current && !isEditing) return inputRef.current.value;
    return inputRef.current ? inputRef.current.dataset.originalValue : "";
  };

  return (
    <div className={css.wrapper}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
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
            value={getTruncatedValue()}
            onChange={(e) => {
              field.onChange(e);
              handleChange(e);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={(e) => {
              inputRef.current = e;
              field.ref(e);
            }}
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
