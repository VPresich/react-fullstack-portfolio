import MarqueeLine from "../MarqueeLine/MarqueeLine";
import css from "./MarqueeInner.module.css";

const MarqueeInner = ({ projectsUrl }) => {
  return (
    <div className={css.inner}>
      <MarqueeLine projectsUrl={projectsUrl} shift={0} />
      <MarqueeLine projectsUrl={projectsUrl} shift={2} />
      <MarqueeLine projectsUrl={projectsUrl} shift={4} />
      <MarqueeLine projectsUrl={projectsUrl} shift={6} />
      <MarqueeLine projectsUrl={projectsUrl} shift={8} />
    </div>
  );
};

export default MarqueeInner;
