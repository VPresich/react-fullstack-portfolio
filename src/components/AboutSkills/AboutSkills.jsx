import { useState } from "react";
import SkillItem from "../AboutSkills/SkillItem/SkillItem";
import skillsData from "./skills-data";
import css from "./AboutSkills.module.css";
import pathIcons from "../../assets/img/icons/symbols.svg";
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

const AboutSkills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
  };

  return (
    <div className={css.container}>
      {/* <div className={css.swiperContainer + "swiper"}> */}
      <div className={css.swiperContainer}>
        {/* <ul className={css.list + "swiper-wrapper"}> */}
        <ul className={css.list}>
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              skill={skill}
              isActive={index === activeIndex}
            />
          ))}
        </ul>
      </div>
      <button className={css.btnNext} onClick={handleNext}>
        <svg className={css.iconNext} aria-label="Arrow icon">
          <use href={`${pathIcons}#icon-arrow-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default AboutSkills;
