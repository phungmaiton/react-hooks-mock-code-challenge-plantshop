import { useState } from "react";

function PlantCard({ name, image, price }) {
  const [outOfStock, setOutOfStock] = useState(false);

  const handleStock = () => {
    setOutOfStock(!outOfStock);
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleStock} className="primary">
        {outOfStock ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
