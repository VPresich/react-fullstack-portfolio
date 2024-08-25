import DocumentTitle from "../../components/DocumentTitle";
import socialLinks from "../../data/social-links";
import SocialList from "../../components/UI/SocialList/SocialList";
import EmailLink from "../../components/UI/EmailLink/EmailLink";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>HomePage</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h1 className={css.title}>
            Hello. <br />
            I&#39;m Fullstack developer Lloyd Jefferson.
          </h1>
          <div className={css.lastLine}>
            <SocialList links={socialLinks} />
            <EmailLink>lloydjefferson@gmail.com</EmailLink>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
