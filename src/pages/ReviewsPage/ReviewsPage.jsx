import NavigationButtons from "../../components/UI/NavigationButtons/NavigationButtons";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./ReviewsPage.module.css";

const ReviewsPage = () => {
  return (
    <>
      <DocumentTitle>Reviews</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>Reviews</h2>
          <div className={css.swiperContainer}>
            <ul className={css.list}></ul>
          </div>

          <NavigationButtons classNamePrev="btnPrev" classNameNext="btnNext" />
        </div>
      </section>
    </>
  );
};
export default ReviewsPage;
