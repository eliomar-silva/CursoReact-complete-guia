import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHiglighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numeroOfCartItems = items.reduce((accItem, curitem) => {
    return accItem + curitem.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHiglighted(true);

    const timer = setTimeout(() => {
      setBtnIsHiglighted(false);
    }, [300]);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numeroOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
