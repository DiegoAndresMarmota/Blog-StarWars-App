import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const People = () => {
  const params = useParams();
  const [datos, setDatos] = useState({});

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.swapi.tech/api/people/" + params.idpersonaje,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setDatos(result))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(datos);
  return (
    <div
      className="card container mb-3 mt-5"
      style={{ width: "650px", backgroundColor: " whitesmoke " }}
    >
      <div className="row g-0">
        <div className="col-md-6">
          <img
            className="img-fluid rounded-start h-5 p-3"
            style={{ width: "650px", height: "410px" }}
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              params.idpersonaje +
              ".jpg"
            }
          />
        </div>
        <div className="col-md-6">
          <h3>Personaje</h3>
          <ul>
            <li>Nombre: {datos.result?.properties.name}</li>
            <li>Descripción: {datos.result?.description}</li>
            <li>Género: {datos.result?.properties.gender}</li>
            <li>Nacimiento: {datos.result?.properties.birth_year}</li>
            <li>Altura: {datos.result?.properties.height} cms.</li>
            <li>Peso: {datos.result?.properties.mass} kgs.</li>
            <li>Color de cabello: {datos.result?.properties.hair_color}</li>
            <li>Color de ojos: {datos.result?.properties.eye_color}</li>
            <li>Color de piel: {datos.result?.properties.skin_color}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
