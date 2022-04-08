import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Receipts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://themealdb.com/api/json/v1/1/search.php?s=A")
      .then((element) => setData(element.data.meals));
  }, []);
  return (
    <ul className="receipt">
      {data.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
};

export default Receipts;
