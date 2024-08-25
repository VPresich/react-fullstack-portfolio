import { Link } from "react-router-dom";
import imgMobileUrl1x from "../../assets/img/footer/photo-mobile@1x.webp";
import imgMobileUrl2x from "../../assets/img/footer/photo-mobile@2x.webp";
import imgDesktopUrl1x from "../../assets/img/footer/photo-desktop@1x.webp";
import imgDesktopUrl2x from "../../assets/img/footer/photo-desktop@2x.webp";
import css from "./FooterLogo.module.css";

const FooterLogo = () => {
  return (
    <div className={css.container}>
      <Link className={css.link} to="/home">
        <picture className={css.picture}>
          <source
            media="(min-width: 768px)"
            srcSet={`${imgDesktopUrl1x} 1x, ${imgDesktopUrl2x} 2x`}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${imgMobileUrl1x} 1x, ${imgMobileUrl2x} 2x`}
          />
          <img
            className={css.image}
            src={imgMobileUrl1x}
            alt="photo of Jefferson"
            loading="lazy"
          />
        </picture>
      </Link>
      <h2 className={css.title}>
        Let&#39;s <span className={css.accent}>work</span>
      </h2>
      <h2 className={css.title}>together</h2>
    </div>
  );
};

export default FooterLogo;
