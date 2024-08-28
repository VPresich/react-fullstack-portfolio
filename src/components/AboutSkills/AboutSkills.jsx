import { useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { selectTheme } from "../../redux/theme/selectors";
import SkillItem from "../AboutSkills/SkillItem/SkillItem";
import css from "./AboutSkills.module.css";
import pathIcons from "../../assets/img/icons/symbols.svg";

const AboutSkills = ({ skillsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useSelector(selectTheme);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={css.container}>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={2}
        modules={[Navigation]}
        spaceBetween={2}
        loop={true}
        effect="slide"
        speed={700}
        navigation={{
          nextEl: `.${css.btnNext}`,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1439: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        className={css.swiperContainer}
      >
        {skillsData.map((skill, index) => (
          <SwiperSlide key={index}>
            <SkillItem skill={skill} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={clsx(css.btnNext, css[theme])}>
        <svg className={css.iconNext} aria-label="Arrow icon">
          <use href={`${pathIcons}#icon-arrow-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default AboutSkills;
