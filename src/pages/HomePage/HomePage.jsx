import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>HomePage</DocumentTitle>
      <section className={css.container}>
        <h2> HomePage</h2>
      </section>
    </>
  );
};
export default HomePage;
