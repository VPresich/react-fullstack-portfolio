import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectTheme } from "../../../redux/theme/selectors";
import ProjectLangItem from "../ProjectLangItem/ProjectLangItem";
import css from "./ProjectItem.module.css";

const ProjectItem = ({
  url1x,
  url2x,
  projectLink = "https://github.com/VPresich/nanny-services",
  techStack = [],
  description = "",
}) => {
  const theme = useSelector(selectTheme);
  return (
    <div className={css.item}>
      <div className={css.infoContainer}>
        <ul className={css.langList}>
          {techStack.map((tech, index) => (
            <ProjectLangItem key={index} tech={tech} />
          ))}
        </ul>
        <div className={css.descrWrapper}>
          <p className={css.description}>{description}</p>
          <a
            href={projectLink}
            className={clsx(css.link, css[theme])}
            target="_blank"
            rel="noopener noreferrer"
          >
            See project
          </a>
        </div>
      </div>
      <div className={clsx(css.imgWrapper, css[theme])}>
        <picture>
          <source srcSet={`${url1x} 1x, ${url2x} 2x`} type="image/webp" />
          <img
            className={clsx(css.img, "lazy")}
            src={url1x}
            alt="Project main page"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  url1x: PropTypes.string.isRequired,
  url2x: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectItem;
