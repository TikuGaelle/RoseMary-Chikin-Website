import { useRef, useState } from "react";
import Input from "../../UI/input";
import classes from "./mealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountisValid, setAmountisValid] = useState(true);
  const submitForm = (e) => {
    e.preventDefault();
    // the value of the current ref.value is always a string, even if the type of the input is number
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 50
    ) {
      setAmountisValid(false);
      // console.log(amountisValid, enteredAmount, enteredAmountNumber);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <>
      <form className={classes.form} onSubmit={(e) => submitForm(e)}>
        {/* {console.log(amountisValid)} */}
        <Input
          ref={amountInputRef}
          label="Quantity"
          input={{
            id: "quantity",
            type: "number",
            min: "0",
            step: "1",
            defaultValue: "0",
          }}
        />
        <button>+</button>
        {!amountisValid && <p>Please enter a valid amount</p>}
      </form>
    </>
  );
};

export default MealItemForm;
