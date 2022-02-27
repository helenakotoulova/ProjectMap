import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';

const Layout = ({children}) => {
  return (
    <section className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </section>
  );
};

export default Layout;
