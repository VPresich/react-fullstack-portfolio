import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import NavigationButtons from "../UI/NavigationButtons/NavigationButtons";
import Reviewer from "./Reviewer/Reviewer";
import css from "./ReviewsList.module.css";

const ReviewsList = ({ reviews = [], isNotBtns = false }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const updateSlideHeights = () => {
      if (swiperRef.current) {
        const swiperSlides =
          swiperRef.current.querySelectorAll(".swiper-slide");
        const maxHeight = Math.max(
          ...Array.from(swiperSlides).map(
            (slide) => slide.getBoundingClientRect().height
          )
        );
        swiperSlides.forEach((slide) => {
          slide.style.height = `${maxHeight}px`;
        });
      }
    };

    updateSlideHeights();
    window.addEventListener("resize", updateSlideHeights);

    return () => {
      window.removeEventListener("resize", updateSlideHeights);
    };
  }, [reviews]);

  return (
    <div className={clsx(css.container, isNotBtns && css.minPadding)}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        spaceBetween={0}
        loop={false}
        effect="slide"
        speed={700}
        navigation={{
          nextEl: `.${css.btnNext}`,
          prevEl: `.${css.btnPrev}`,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        className={css.swiperContainer}
        ref={swiperRef}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <Reviewer {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButtons
        classNamePrev={clsx(css.btnPrev, isNotBtns && css.notVisible)}
        classNameNext={clsx(css.btnNext, isNotBtns && css.notVisible)}
      />
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: PropTypes.string,
      avatar_url: PropTypes.string,
      review: PropTypes.string,
    })
  ),
  isNotBtns: PropTypes.bool,
};

export default ReviewsList;
