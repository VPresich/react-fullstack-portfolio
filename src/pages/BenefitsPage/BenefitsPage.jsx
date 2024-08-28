import React from "react";
import BenefitsList from "../../components/BenefitsList/BrnefitsList";
import OrderLink from "../../components/UI/OrderLink/OrderLink";
import DocumentTitle from "../../components/DocumentTitle";
import AboutSkills from "../../components/AboutSkills/AboutSkills";
import softSkillsData from "../../components/AboutSkills/soft-skills-data";
import css from "./BenefitsPage.module.css";

const BenefitsPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>Benefits</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.benefitsContainer}>
            <h2 className={css.title}>Benefits of working with me</h2>
            <div className={css.wrap}>
              <BenefitsList />
              <span className={css.orderWrapper}>
                <OrderLink isColored={false}>Order the project</OrderLink>
              </span>
            </div>
          </div>

          <AboutSkills skillsData={softSkillsData} />
        </div>
      </section>
    </React.Fragment>
  );
};
export default BenefitsPage;
