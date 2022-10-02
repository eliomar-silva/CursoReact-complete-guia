import Card from "../UI/Card";
import MealItem from "./MealsItens/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = (props) => {
const [meals, setMeals] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-c1392-default-rtdb.firebaseio.com/meals.json"
      );

      if(!response.ok) {
        throw new Error('Somethinng went wrong!')
      }

      const responseDate = await response.json();

      const loadedMeals = [];

      for (const key in responseDate) {
        loadedMeals.push({
          id: key,
          name: responseDate[key].name,
          description: responseDate[key].description,
          price: responseDate[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if(isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError) {
    return <section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meals) => (
    <MealItem
      id={meals.id}
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card><ul>{mealsList}</ul></Card>
    </section>
  );
};

export default AvailableMeals;
