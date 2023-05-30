import PlantCard from "./PlantCard";
import { useState } from "react";
function PlantList({ plants, setPlants }) {
  // const handleStockChange = () => {
  //   setOutOfStock(!outOfStock);

  //   console.log(outOfStock);
  // };

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          // onStockChange={handleStockChange}
        />
      ))}
    </ul>
  );
}

export default PlantList;
