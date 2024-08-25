import css from "./FormButton.module.css";
const FormButton = ({ children, handleClick, ...props }) => {
  return (
    <button className={css.btn} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
export default FormButton;
