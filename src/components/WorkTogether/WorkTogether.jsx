import { useState } from "react";
import { useDispatch } from "react-redux";
import FooterLogo from "../FooterLogo/FooterLogo";
import RequestForm from "../RequestForm/RequestForm";
import EmailLink from "../UI/EmailLink/EmailLink";
import PhoneLink from "../UI/PhoneLink/PhoneLink";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import ModalWindowContent from "../ModalWindowContent/ModalWindowContent";
import { requestProject } from "../../redux/request/operations";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";
import ScrollUpBtn from "../UI/ScrollUpBtn/ScrollUpBtn";

import css from "./WorkTogether.module.css";

const WorkTogether = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleRequest = async (values) => {
    try {
      await dispatch(requestProject(values)).unwrap();
      successNotify("Success!");
      handleOpen();
      return "Success!";
    } catch (error) {
      errNotify("Fetch error!");
      throw new Error("Fetch error!");
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  return (
    <footer className={css.footer} id="id-footer">
      <div className={css.container}>
        <div className={css.content}>
          <FooterLogo />
          <RequestForm handleRequest={handleRequest} />
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
        </div>
      </div>
      {showModal && (
        <ModalWrapper onClose={handleClose}>
          <ModalWindowContent />
        </ModalWrapper>
      )}
    </footer>
  );
};

export default WorkTogether;
