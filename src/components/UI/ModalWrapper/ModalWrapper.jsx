import { useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectTheme } from "../../../redux/theme/selectors";
import ReactDOM from "react-dom";

import css from "./ModalWrapper.module.css";
import iconsPath from "../../../assets/img/icons/symbols.svg";

const ModalWrapper = ({ children, onClose, portalId = "portal-root" }) => {
  const wrapperRef = useRef(null);
  const theme = useSelector(selectTheme);

  const handleClickOutside = useCallback(
    (event) => {
      event.stopPropagation();
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleDocumentKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [handleDocumentKeyDown]);

  return ReactDOM.createPortal(
    <div className={css.modalWrapper} onClick={handleClickOutside}>
      <div
        className={clsx(css.modal, css[theme])}
        ref={wrapperRef}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button className={css.closeBtn} onClick={onClose}>
          <svg className={css.icon} aria-label="close button icon">
            <use href={`${iconsPath}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById(portalId)
  );
};

export default ModalWrapper;
