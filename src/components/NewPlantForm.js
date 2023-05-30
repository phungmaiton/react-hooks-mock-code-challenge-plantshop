import { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const initialFormValues = {
    name: "",
    image: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newPlant) => setPlants([...plants, newPlant]));

    setFormData(initialFormValues);
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>g
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.number}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
