import { useForm, FormProvider, Controller } from "react-hook-form";
import { useState } from "react";
import FormButton from "../UI/FormButton/FormButton";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./RequestForm.module.css";
import FormInput from "../UI/FormInput/FormInput";

export default function RequestForm({ handleRequest }) {
  const [successMessage, setSuccessMessage] = useState("");

  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      email: "",
      comment: "",
    },
  });

  const { handleSubmit, reset, setError } = methods;

  const onSubmit = async (values) => {
    try {
      const message = await handleRequest(values);
      setSuccessMessage(message);
      reset();
    } catch (error) {
      setError("email", { type: "manual", message: error.message });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputsWrapper}>
          <Controller
            name="email"
            control={methods.control}
            render={({ field }) => (
              <FormInput
                {...field}
                placeholder="clients@gmail.com"
                type="text"
                successText={successMessage}
                setSuccessText={setSuccessMessage}
              />
            )}
          />
          <Controller
            name="comment"
            control={methods.control}
            render={({ field }) => (
              <FormInput {...field} placeholder="comments" type="text" />
            )}
          />
        </div>
        <FormButton type="submit">Send</FormButton>
      </form>
    </FormProvider>
  );
}
