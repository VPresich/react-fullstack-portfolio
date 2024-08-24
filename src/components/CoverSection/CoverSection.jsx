import clsx from "clsx";
import css from "./CoverSection.module.css";
import MarqueeInner from "./MarqueeInner/MarqueeInner";

const CoversSection = ({ projects }) => {
  return (
    <section className={clsx(css.section)}>
      <div className={css.container}>
        <h2 className="visually-hidden">Cover</h2>
        <div className={css.marquee}>
          <MarqueeInner projectsUrl={projects} />
        </div>
      </div>
    </section>
  );
};

export default CoversSection;
