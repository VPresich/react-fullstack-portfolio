import PropTypes from "prop-types";
import css from "./ProjectLangItem.module.css";

const ProjectLangItem = ({ tech }) => {
  return (
    <li className={css.langItem}>
      <span className={css.langItemText}>{tech}</span>
    </li>
  );
};

ProjectLangItem.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default ProjectLangItem;
