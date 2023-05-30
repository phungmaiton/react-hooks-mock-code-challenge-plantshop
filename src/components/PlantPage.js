import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((plants) => setPlants(plants));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const plantsToDisplay = plants.filter((plant) => {
    if (search === "") return true;
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search onSearch={handleSearch} />
      <PlantList plants={plantsToDisplay} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
