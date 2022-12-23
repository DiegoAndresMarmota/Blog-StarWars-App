import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Personaje1 = () => {
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
          <h3>Character details:</h3>
          <ul>
            <li>Name: {datos.result?.properties.name}</li>
            <li>Description: {datos.result?.description}</li>
            <li>Gender: {datos.result?.properties.gender}</li>
            <li>Birth year: {datos.result?.properties.birth_year}</li>
            <li>Height: {datos.result?.properties.height}</li>
            <li>Mass: {datos.result?.properties.mass}</li>
            <li>Hair color: {datos.result?.properties.hair_color}</li>
            <li>Eyes color: {datos.result?.properties.eye_color}</li>
            <li>Skin color: {datos.result?.properties.skin_color}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
