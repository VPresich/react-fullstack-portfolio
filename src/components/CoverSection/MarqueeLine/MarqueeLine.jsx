import css from "./MarqueeLine.module.css";

const MarqueeLine = ({ projectsUrl, shift = 0 }) => {
  const shiftedProjectsUrl = [
    ...projectsUrl.slice(shift),
    ...projectsUrl.slice(0, shift),
  ];

  return (
    <ul className={css.line}>
      {shiftedProjectsUrl.map(({ url1x, url2x }, index) => (
        <li key={index}>
          <picture className={css.picture}>
            <source srcSet={`${url1x} 1x, ${url2x} 2x`} type="image/webp" />
            <img
              className={css.img}
              src={url1x}
              alt="Project image"
              loading="lazy"
            />
          </picture>
        </li>
      ))}
    </ul>
  );
};

export default MarqueeLine;
