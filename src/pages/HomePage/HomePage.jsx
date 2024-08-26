import { useSelector } from "react-redux";
import clsx from "clsx";
import DocumentTitle from "../../components/DocumentTitle";
import socialLinks from "../../data/social-links";
import { selectTheme } from "../../redux/theme/selectors";
import SocialList from "../../components/UI/SocialList/SocialList";
import EmailLink from "../../components/UI/EmailLink/EmailLink";
import css from "./HomePage.module.css";

const HomePage = () => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <DocumentTitle>HomePage</DocumentTitle>
      <section className={clsx(css.section, css[theme])}>
        <div className={css.container}>
          <h1 className={css.title}>
            Hello. <br />
            I&#39;m Fullstack developer Lloyd Jefferson.
          </h1>
          <div className={css.lastLine}>
            <SocialList links={socialLinks} />
            <EmailLink />
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
