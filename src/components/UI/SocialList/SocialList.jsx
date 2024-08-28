import css from "./SocialList.module.css";

const SocialList = ({ links }) => {
  const handleSpanClick = (href) => {
    window.open(href, "_blank", "noopener noreferrer");
  };
  return (
    <ul className={css.list}>
      {links.map((link, index) => (
        <li key={index}>
          <span
            className={css.item}
            onClick={() => {
              handleSpanClick(link.href);
            }}
          >
            <a
              className={css.link}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              onClick={(e) => e.preventDefault()}
            >
              {link.label}
            </a>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
