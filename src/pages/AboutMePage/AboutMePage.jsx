import DocumentTitle from "../../components/DocumentTitle";
import css from "./AboutMePage.module.css";

const AboutMePage = () => {
  return (
    <>
      <DocumentTitle>AboutMe</DocumentTitle>
      <section className={css.container}>
        <h2> About me</h2>
      </section>
    </>
  );
};
export default AboutMePage;
