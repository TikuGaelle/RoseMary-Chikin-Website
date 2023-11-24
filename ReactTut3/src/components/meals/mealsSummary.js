import classes from "./mealsSummary.module.css";

const MealsSummary = () => {
  return (
    <>
      <section className={classes.summary}>
        <h2> Delicious and Healthy Chicken, Delivered To You</h2>
        <p>
          {" "}
          Choose your favorite chicken from our broad selection of available
          birds, and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our birds are fed with high quality nutrients, in a well kept
          environment and kept healthy by professionals!
        </p>
      </section>
    </>
  );
};

export default MealsSummary;
