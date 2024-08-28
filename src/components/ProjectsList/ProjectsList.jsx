import PropTypes from "prop-types";
import ProjectItem from "./ProjectItem/ProjectItem";
import css from "./ProjectsList.module.css";

const ProjectsList = ({ projects }) => {
  return (
    <div className={css.swiperContainer}>
      <ul className={css.list}>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            url1x={project.url1x}
            url2x={project.url2x}
            projectLink={project.projectLink}
          />
        ))}
      </ul>
    </div>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      url1x: PropTypes.string.isRequired,
      url2x: PropTypes.string.isRequired,
      projectLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectsList;
