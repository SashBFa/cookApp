import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Receipts = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((element) => setData(element.data.meals));
  }, [search]);

  return (
    <ul className="receipt">
      {data &&
        data.slice(0, 24).map((meal) => <Card key={meal.idMeal} meal={meal} />)}
    </ul>
  );
};

export default Receipts;
