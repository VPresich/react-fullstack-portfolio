import { Link } from "react-router-dom";
import imgUrl1x from "../../assets/img/header/photo@1x.webp";
import imgUrl2x from "../../assets/img/header/photo@1x.webp";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={css.logo} to="/home">
      <picture className={css.picture}>
        <source srcSet={`${imgUrl1x} 1x, ${imgUrl2x} 2x`} type="image/webp" />
        <img
          className={css.image}
          src={imgUrl1x}
          alt="Photo of Jefferson"
          loading="lazy"
        />
      </picture>
      <span className={css.text}>jefferson*</span>
    </Link>
  );
};

export default Logo;
