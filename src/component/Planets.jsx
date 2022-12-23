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
    <div
      className="card container mb-3 mt-5"
      style={{ width: "650px", backgroundColor: " whitesmoke " }}
    >
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

        <div className="col-md-6 pt-2">
          <h1 className="text-center">Planeta</h1>
          <ul>
            <li>Nombre: {datos2.result?.properties.name}</li>
            <li>Descripción: {datos2.result?.description}</li>
            <li>Diametro: {datos2.result?.properties.diameter} kms.</li>
            <li>Rotación: {datos2.result?.properties.rotation_period} dias</li>
            <li>Orbita: {datos2.result?.properties.orbital_period} dias</li>
            <li>Gravedad: {datos2.result?.properties.gravity}</li>
            <li>
              Población: {datos2.result?.properties.population} individuos
            </li>
            <li>Clima: {datos2.result?.properties.climate}</li>
            <li>Terrreno: {datos2.result?.properties.terrain}</li>
            <li>
              Superficie de agua: {datos2.result?.properties.surface_water}{" "}
              atmosferas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
