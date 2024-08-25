import css from "./WorkTogether.module.css";
import FooterLogo from "../FooterLogo/FooterLogo";
import RequestForm from "../RequestForm/RequestForm";

const WorkTogether = () => {
  return (
    <footer className={css.footer}>
      <dim className={css.container}>
        <FooterLogo />
        <RequestForm />
      </dim>
    </footer>
  );
};

export default WorkTogether;
