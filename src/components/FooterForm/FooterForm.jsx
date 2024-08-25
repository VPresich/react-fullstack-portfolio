import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import "./FooterForm.css"; // Подключите стили для формы

const FooterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="email"
        type="text"
        placeholder="clients@gmail.com"
        register={register}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        }}
        error={errors.email}
        successMessage={isSubmitSuccessful && !errors.email ? "Success!" : ""}
        WrapperComponent="div" // Используем div как обертку
        wrapperProps={{ className: "custom-email-wrapper" }} // Передаем свойства для обертки
      />

      <FormInput
        name="comment"
        type="text"
        placeholder="comments"
        register={register}
        validation={{
          required: "Comment is required",
          minLength: {
            value: 5,
            message: "Comment must be at least 5 characters",
          },
        }}
        error={errors.comment}
        WrapperComponent="section" // Используем section как обертку
        wrapperProps={{ className: "custom-comment-wrapper" }} // Передаем свойства для обертки
      />

      <button className="footer-button" type="submit">
        Send
      </button>
    </form>
  );
};

export default FooterForm;
