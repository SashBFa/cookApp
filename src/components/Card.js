import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card">
      <h3 className="card__title">{meal.strMeal}</h3>
      <p className="card__origin">Origin : {meal.strArea}</p>
      <img
        className="card__img"
        src={meal.strMealThumb}
        alt={"picture" + meal.strMeal}
      />
      <p className="card__instruction">{meal.strInstructions}</p>
      <button className="card__button">See More</button>
    </li>
  );
};

export default Card;
