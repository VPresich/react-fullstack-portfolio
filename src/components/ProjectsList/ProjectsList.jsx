import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NavigationButtons from "../UI/NavigationButtons/NavigationButtons";
import ProjectItem from "./ProjectItem/ProjectItem";
import css from "./ProjectsList.module.css";

const ProjectsList = ({ projects }) => {
  const handleSlideChange = () => {};

  return (
    <div className={css.container}>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        modules={[Navigation]}
        spaceBetween={0}
        loop={false}
        effect="slide"
        speed={1000}
        navigation={{
          nextEl: `.${css.btnNext}`,
          prevEl: `.${css.btnPrev}`,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        className={css.swiperContainer}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectItem
              url1x={project.url1x}
              url2x={project.url2x}
              projectLink={project.projectLink}
              techStack={project.techStack}
              description={project.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtons
        classNamePrev={css.btnPrev}
        classNameNext={css.btnNext}
      />
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
