import { useForm, FormProvider, Controller } from "react-hook-form";
import FormButton from "../UI/FormButton/FormButton";
import { feedbackSchema } from "./feedbackSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./RequestForm.module.css";
import FormInput from "../UI/FormInput/FormInput";

export default function RequestForm({ handleRequest }) {
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      email: "",
      comment: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (values) => {
    console.log(values);
    // try {
    //   await handleRequest(values);
    //   reset();
    // } catch (error) {
    //   console.log(error.message);
    // }
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
        <FormButton type="submit">Log in</FormButton>
      </form>
    </FormProvider>
  );
}

//import { useForm, FormProvider } from "react-hook-form";
// import FormInput from "../UI/FormInput/FormInput";
// import "./RequestForm.module.css";

// const RequestForm = () => {
//   const methods = useForm({
//     defaultValues: {
//       email: "",
//       comment: "",
//     },
//   });

//   const {
//     handleSubmit,
//     formState: { errors, isSubmitSuccessful },
//   } = methods;

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <FormProvider {...methods}>
//       <form className="footer-form" onSubmit={handleSubmit(onSubmit)}>
//         <FormInput
//           name="email"
//           type="text"
//           placeholder="clients@gmail.com"
//           validation={{
//             required: "Email is required",
//             pattern: {
//               value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//               message: "Invalid email address",
//             },
//           }}
//           errorMessage={errors.email?.message}
//           successMessage={isSubmitSuccessful && !errors.email ? "Success!" : ""}
//         />

//         <FormInput
//           name="comment"
//           type="text"
//           placeholder="comments"
//           validation={{
//             required: "Comment is required",
//             minLength: {
//               value: 5,
//               message: "Comment must be at least 5 characters",
//             },
//           }}
//           errorMessage={errors.comment?.message}
//         />

//         <button className="button" type="submit">
//           Send
//         </button>
//       </form>
//     </FormProvider>
//   );
// };

// export default RequestForm;
