import headerImage from "../../images/images.jpg";
import CartButton from "./CartBtn";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1> RoseMary Chikin</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.mainImage}>
        <img src={headerImage}></img>
      </div>
    </>
  );
};

export default Header;
