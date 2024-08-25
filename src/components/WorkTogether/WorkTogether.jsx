import css from "./WorkTogether.module.css";
import FooterLogo from "../FooterLogo/FooterLogo";
import RequestForm from "../RequestForm/RequestForm";
import EmailLink from "../UI/EmailLink/EmailLink";
import PhoneLink from "../UI/PhoneLink/PhoneLink";
import ScrollUpBtn from "../UI/ScrollUpBtn/ScrollUpBtn";

const WorkTogether = () => {
  return (
    <footer className={css.footer} id="id-footer">
      <dim className={css.container}>
        <dim className={css.content}>
          <FooterLogo />
          <RequestForm />
          <address>
            <ul className={css.address}>
              <li>
                <EmailLink />
              </li>
              <li>
                <PhoneLink />
              </li>
            </ul>
          </address>
          <div className={css.scrollUpContainer}>
            <ScrollUpBtn />
          </div>
        </dim>
      </dim>
    </footer>
  );
};

export default WorkTogether;
