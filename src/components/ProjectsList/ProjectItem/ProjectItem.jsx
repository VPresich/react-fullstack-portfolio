import PropTypes from "prop-types";
import clsx from "clsx";
import ProjectLangItem from "../ProjectLangItem/ProjectLangItem";
import css from "./ProjectItem.module.css";

const ProjectItem = ({
  url1x,
  url2x,
  projectLink = "https://github.com/VPresich/nanny-services",
  techStack = [],
  description,
}) => {
  return (
    <li className={css.item}>
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
            className={css.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            See project
          </a>
        </div>
      </div>
      <div className={css.imgWrapper}>
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
    </li>
  );
};

ProjectItem.propTypes = {
  url1x: PropTypes.string.isRequired,
  url2x: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectItem;

// className={css.description}>
//            { Programming Across Borders: Ideas, Technologies, Innovations
