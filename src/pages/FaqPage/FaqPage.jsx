import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import faqAccordionData from "../../components/FaqAccordion/faqAccordion-data";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import css from "./FaqPage.module.css";

const FaqPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>FAQ</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>FAQ</h2>
          <FaqAccordion faqListData={faqAccordionData} />
        </div>
      </section>
    </React.Fragment>
  );
};
export default FaqPage;
