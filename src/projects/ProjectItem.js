import classes from './ProjectItem.module.css';

const ProjectItem = ({ title, link, img }) => {
  return (
    <article className={classes.article}>
      <a href={link} target='_blank'>
        <img src={img} alt={title}/>
        <h4>{title}</h4>
      </a>
    </article>
  );
};

export default ProjectItem;
