import { useState, useRef, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import clsx from "clsx";
import css from "./FormInput.module.css";

const FormInput = ({
  name,
  placeholder,
  type = "text",
  className = "",
  successMessage = "",
  errorMessage = "",
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

  const errorText = errors[name]?.message || errorMessage;
  const isSuccess = !errors[name] && successMessage;

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
    // if (inputRef.current && !isEditing) {
    //   const originalValue = inputRef.current.dataset.originalValue || "";
    //   return originalValue.length > 20 ? `${originalValue.slice(0, 20)}...` : originalValue;
    // }
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
              {
                [css.errorInput]: errorText,
                [css.successInput]: isSuccess,
              },
              className
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
      {errorText && <span className={css.error}>{errorText}</span>}
      {isSuccess && <span className={css.success}>{successMessage}</span>}
    </div>
  );
};

export default FormInput;

// import clsx from "clsx";
// import { useFormContext } from "react-hook-form";
// import css from "./FormInput.module.css";

// const FormInput = ({
//   name,
//   onChange,
//   value,
//   placeholder,
//   type = "text",
//   className = "",
//   successMessage = "",
//   errorMessage = "",
// }) => {
//   const {
//     formState: { errors },
//   } = useFormContext();

//   const errorText = errors[name]?.message || errorMessage;
//   const isSuccess = !errors[name] && successMessage;

//   return (
//     <div className={css.wrapper}>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={clsx(
//           css.input,
//           {
//             [css.errorInput]: errors[name] || errorMessage,
//             [css.successInput]: isSuccess,
//           },
//           className
//         )}
//         placeholder={placeholder}
//       />
//       {errorText && <span className={css.error}>{errorText}</span>}
//       {isSuccess && <span className={css.success}>{successMessage}</span>}
//     </div>
//   );
// };

// export default FormInput;

// import React, { useState, useEffect, useRef } from 'react';
// import { useFormContext } from 'react-hook-form';
// import clsx from 'clsx';
// import css from './EllipsisInput.module.css';

// const EllipsisInput = ({
//   name,
//   placeholder,
//   initialValue = '',
//   className = '',
//   successMessage = '',
//   errorMessage = '',
// }) => {
//   const {
//     formState: { errors },
//     register,
//     setValue,
//   } = useFormContext();

//   const [isEditing, setIsEditing] = useState(false);
//   const inputRef = useRef(null);

//   // Initialize input value and store full value in data attribute
//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.value = initialValue;
//       inputRef.current.dataset.originalValue = initialValue;
//     }
//   }, [initialValue]);

//   const handleFocus = () => {
//     setIsEditing(true);
//   };

//   const handleBlur = () => {
//     setIsEditing(false);
//     // Save the full value in the react-hook-form context
//     setValue(name, inputRef.current.dataset.originalValue);
//   };

//   const handleChange = (e) => {
//     // Update the full value in the data attribute
//     inputRef.current.dataset.originalValue = e.target.value;
//   };

//   const errorText = errors[name]?.message || errorMessage;
//   const isSuccess = !errors[name] && successMessage;

//   return (
//     <div className={css.wrapper}>
//       <input
//         type="text"
//         name={name}
//         className={clsx(
//           css.input,
//           errorText && css.errorInput,
//           isSuccess && css.successInput,
//           className
//         )}
//         placeholder={placeholder}
//         defaultValue={initialValue}
//         {...register(name)} // Connect to react-hook-form
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         ref={inputRef}
//         title={inputRef.current?.dataset.originalValue || initialValue} // Show full text on hover
//       />
//       {errorText && <span className={css.error}>{errorText}</span>}
//       {!errorText && successMessage && <span className={css.success}>{successMessage}</span>}
//     </div>
//   );
// };

// export default EllipsisInput;
