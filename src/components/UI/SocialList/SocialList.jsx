import css from "./SocialList.module.css";

const SocialList = ({ links }) => {
  return (
    <ul className={css.list}>
      {links.map((link, index) => (
        <li className={css.item} key={index}>
          <a
            className={css.link}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
