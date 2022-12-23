import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Planets = () => {
  const params = useParams();
  const [datos2, setDatos2] = useState({});

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.swapi.tech/api/planets/" + params.idplanet,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setDatos2(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    console.log(datos2);
  });
  return (
    <div className="card container mb-3 mt-5" style={{ width: "650px" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img
            className="img-fluid rounded-start h-5 p-3"
            style={{ width: "550px", height: "330px" }}
            src={
              "https://starwars-visualguide.com/assets/img/planets/" +
              params.idplanet +
              ".jpg"
            }
          />
        </div>

        <div className="col-md-6">
          <h1>Character details: </h1>
          <ul>
            <li>Name: {datos2.result?.properties.name}</li>
            <li>Description: {datos2.result?.description}</li>
            <li>Diameter: {datos2.result?.properties.diameter}</li>
            <li>
              Rotation period: {datos2.result?.properties.rotation_period}
            </li>
            <li>Orbital period: {datos2.result?.properties.orbital_period}</li>
            <li>Gravity: {datos2.result?.properties.gravity}</li>
            <li>Population: {datos2.result?.properties.population}</li>
            <li>Climate: {datos2.result?.properties.climate}</li>
            <li>Terrain: {datos2.result?.properties.terrain}</li>
            <li>Surface water: {datos2.result?.properties.surface_water}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
