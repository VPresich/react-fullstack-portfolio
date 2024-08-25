import imgMobileUrl1x from "../../assets/img/about-me/photo-mobile@1x.webp";
import imgMobileUrl2x from "../../assets/img/about-me/photo-mobile@2x.webp";

import imgTabletUrl1x from "../../assets/img/about-me/photo-tablet@1x.webp";
import imgTabletUrl2x from "../../assets/img/about-me/photo-tablet@2x.webp";

import imgDesktopUrl1x from "../../assets/img/about-me/photo-desktop@1x.webp";
import imgDesktopUrl2x from "../../assets/img/about-me/photo-desktop@2x.webp";

import css from "./ContentImage.module.css";

const ContentImage = () => {
  return (
    <picture className={css.picture}>
      <source
        media="(min-width: 1440px)"
        srcSet={`${imgDesktopUrl1x} 1x, ${imgDesktopUrl2x} 2x`}
        type="image/webp"
      />

      <source
        media="(min-width: 768px)"
        srcSet={`${imgTabletUrl1x} 1x, ${imgTabletUrl2x} 2x`}
        type="image/webp"
      />
      <source
        media="(max-width: 767px)"
        srcSet={`${imgMobileUrl1x} 1x, ${imgMobileUrl2x} 2x`}
        type="image/webp"
      />
      <img
        className={css.image}
        src="./img/about-me/about-mobile@1x.webp"
        alt="photo of Jefferson"
        loading="lazy"
      />
    </picture>
  );
};

export default ContentImage;
