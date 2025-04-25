import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const { id, name, image, price, soldOut } = plant;
  const [isSoldOut, setIsSoldOut] = useState(soldOut);

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then(() => {
      onDeletePlant(id);
    });
  };

  const handleUpdate = () => {
    const updatedData = { soldOut: !isSoldOut };

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
        setIsSoldOut(updatedPlant.soldOut);
      });
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button
        className={isSoldOut ? "secondary" : "primary"}
        onClick={handleUpdate}
      >
        {isSoldOut ? "Sold Out" : "In Stock"}
      </button>
      <button className="delete" onClick={handleDelete}>
        🗑️
      </button>
    </li>
  );
}

export default PlantCard;
