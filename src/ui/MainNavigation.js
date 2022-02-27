import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <h1>Helena Kotoulová</h1>
        <ul className={classes.list}>
          <li>
           <a href='#aboutMe' className={classes.anchor}>O mně</a>
          </li>
          <li>
            <a href='#projects'className={classes.anchor}>Projekty</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
