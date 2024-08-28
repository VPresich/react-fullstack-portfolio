import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { projectsUrl } from "../../data/projects-data";
import css from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <DocumentTitle>Projects</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.title}>Projects</h2>
          <ProjectsList projects={projectsUrl} />
        </div>
      </section>
    </React.Fragment>
  );
};
export default ProjectsPage;
