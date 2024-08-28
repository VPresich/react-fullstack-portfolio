import DocumentTitle from "../../components/DocumentTitle";
import css from "./FaqPage.module.css";

const FaqPage = () => {
  return (
    <>
      <DocumentTitle>FAQ</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>Reviews</h2>
          <div className={css.swiperContainer}>
            <ul className={css.list}></ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default FaqPage;
