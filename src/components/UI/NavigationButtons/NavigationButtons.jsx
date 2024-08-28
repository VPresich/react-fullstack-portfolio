import clsx from "clsx";
import NavigationBtn from "../NavigationBtn/NavigationBtn";
import css from "./NavigationButtons.module.css";

const NavigationButtons = ({
  classNameButtons = "",
  classNamePrev = "",
  classNameIconPrev = "",
  classNameNext = "",
  classNameIconNext = "",
}) => {
  return (
    <div className={clsx(css.buttons, classNameButtons)}>
      <NavigationBtn
        iconId="icon-arrow-left"
        ariaLabel="Arrow left icon"
        classNameBtn={classNamePrev}
        classNameIcon={classNameIconPrev}
      />
      <NavigationBtn
        iconId="icon-arrow-right"
        ariaLabel="Arrow right icon"
        classNameBtn={classNameNext}
        classNameIcon={classNameIconNext}
      />
    </div>
  );
};

export default NavigationButtons;
