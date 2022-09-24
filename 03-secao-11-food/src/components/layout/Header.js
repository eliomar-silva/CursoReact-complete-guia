import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsImage from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header} >
        <h1>ReactFood</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-img"]}>
        <img src={MealsImage} alt={"A table full of delicius food!"}></img>
      </div>
    </Fragment>
  );
};
export default Header;
