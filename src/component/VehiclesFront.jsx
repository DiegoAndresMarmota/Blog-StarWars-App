import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VehiclesFront = () => {
  const params = useParams();
  const [datos3, setDatos3] = useState({});

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.swapi.tech/api/vehicles/" + params.idvehicles,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setDatos3(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    console.log(datos3);
  });
  return (
    <div
      className="card container mb-3 mt-5"
      style={{ width: "650px", backgroundColor: " whitesmoke " }}
    >
      <div className="row g-0">
        <div className="col-md-6">
          <img
            className="img-fluid rounded-start h-5 p-3"
            style={{ width: "450px", height: "310px" }}
            src={
              "https://starwars-visualguide.com/assets/img/vehicles/" +
              params.idvehicles +
              ".jpg"
            }
          />
        </div>
        <div className="col-md-6">
          <h1>Character details: </h1>
          <ul>
            <li>Name: {datos3.result?.properties.name}</li>
            <li>Description: {datos3.result?.description}</li>
            <li>Model: {datos3.result?.properties.model}</li>
            <li>Vehicle class: {datos3.result?.properties.vehicle_class}</li>
            <li>Manufacturer: {datos3.result?.properties.manufacturer}</li>
            <li>Crew: {datos3.result?.properties.crew}</li>
            <li>Passengers {datos3.result?.properties.passengers}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
