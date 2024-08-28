import DocumentTitle from "../../components/DocumentTitle";
import NavigationButtons from "../../components/UI/NavigationButtons/NavigationButtons";
import css from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <>
      <DocumentTitle>Projects</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>Projects</h2>
          <div className={css.swiperContainer}>
            <ul className={css.list}></ul>
          </div>

          <NavigationButtons classNamePrev="btnPrev" classNameNext="btnNext" />

          {/* <div className="custom-container-buttons projects-buttons">
            <button className="custom-btn-prev projects-btn-prev">
              <svg
                className="custom-icon-prev projects-icon"
                aria-label="Arrow icon left"
              >
                <use href="./img/icons/symbols.svg#icon-arrow-left"></use>
              </svg>
            </button>
            <button className="custom-btn-next projects-btn-next">
              <svg
                className="custom-icon-next projects-icon"
                aria-label="Arrow icon right"
              >
                <use href="./img/icons/symbols.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default ProjectsPage;
