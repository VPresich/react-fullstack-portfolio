import { useSelector } from "react-redux";
import { selectRequest } from "../../redux/request/selectors";
import css from "./ModalWindowContent.module.css";

const ModalWindowContent = () => {
  const { title, message } = useSelector(selectRequest);
  return (
    <div className={css.container}>
      <p className={css.title}>{title}</p>
      <p className={css.message}>{message}</p>
    </div>
  );
};

export default ModalWindowContent;
