import Card from "../UI/card";
import classes from "./availableMeals.module.css";
import MealItem from "./mealItems/mealItem";

const ChickenDetails = [
  {
    id: "1",
    name: "RoseMary",
    description: "Finest Chicken, top quality",
    price: 5000,
  },
  {
    id: "2",
    name: "RoseMary",
    description: "Finest Chicken, top quality",
    price: 5000,
  },
  {
    id: "3",
    name: "RoseMary",
    description: "Finest Chicken, top quality",
    price: 5000,
  },
  {
    id: "4",
    name: "RoseMary",
    description: "Finest Chicken, top quality",
    price: 5000,
  },
  {
    id: "5",
    name: "RoseMary",
    description: "Finest Chicken, top quality",
    price: 5000,
  },
];

const AvailableChickens = () => {
  const chickenList = ChickenDetails.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{chickenList}</ul>
          <br />
        </Card>
      </section>
    </>
  );
};

export default AvailableChickens;
