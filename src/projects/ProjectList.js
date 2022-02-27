import { Fragment } from "react";
import { data } from "../data/data";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <Fragment>
      <h1 className={classes.title}>Moje projekty</h1>
      <div className={classes.underline}></div>
      <section className={classes.section}>
        {data.map((item) => (
          <ProjectItem
            img={item.image}
            key={item.id}
            link={item.link}
            title={item.title}
          />
        ))}
      </section>
    </Fragment>
  );
};

export default ProjectList;
