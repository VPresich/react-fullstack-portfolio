import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import faqListData from "../../components/FaqAccordion/faqlist-data";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import css from "./FaqPage.module.css";

const FaqPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>FAQ</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>FAQ</h2>
          <FaqAccordion faqListData={faqListData} />
        </div>
      </section>
    </React.Fragment>
  );
};
export default FaqPage;
