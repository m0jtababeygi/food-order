import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from '../Meals/MealItem';
import Card from '../UI/Card';
import mealsData from '../../data-from-firebase/data-from-firebase.json';


const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // ******************** with firebase ********************  
    // useEffect(() => {
    //     const fetchMeals = async () => {
    //         const response = await fetch('https://react-http-3eac0-default-rtdb.firebaseio.com/meals.json');
    //         const responseData = await response.json();

    //         const loadedMeals = [];

    //         for (const key in responseData) {
    //             loadedMeals.push({
    //                 id: key,
    //                 name: responseData[key].name,
    //                 description: responseData[key].description,
    //                 price: responseData[key].price
    //             });
    //         };

    //         setMeals(loadedMeals);
    //         setIsLoading(false);
    //     };

    //     fetchMeals();
    // }, []);

    // ******************** with json file ********************
    useEffect(() => {
        const loadedMeals = Object.keys(mealsData.meals).map(mealId => ({
            id: mealId,
            name: mealsData.meals[mealId].name,
            description: mealsData.meals[mealId].description,
            price: mealsData.meals[mealId].price
        }));

        setMeals(loadedMeals);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (<section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>)
    };

    const mealsList = meals.map(meal =>
        <MealItem
            key={meal.id}I
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />)
    return (
        <section className={classes.meals}>
            <ul>
                <Card>
                    {mealsList}
                </Card>
            </ul>
        </section>
    )
}


export default AvailableMeals;