import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Logo from "../component/Logo";
import { Context } from "../store/appContext";

export const Home = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center">
      <Logo />
      <div className="row align-items-center">
        {store.people.map((e, i) => {
          return (
            <div className="card mx-auto my-auto mt-4" style={{ width: "20rem" }}>
              <img
                className="card-img-top img-fluid h-5 p-3"
                alt="Card image cap"
                src={
                  "https://starwars-visualguide.com/assets/img/characters/" +
                  e.uid +
                  ".jpg"
                }
              />
              <div className="card-body d-flex justify-content-around align-items-end">
                <h5 className="card-title">{e.name}</h5>
                <Link to={"/personajes/" + e.uid}>
                  <button className="button2">Learn More</button>
                </Link>
                <button
                  className="button2"
                  onClick={() => {
                    actions.addFav(e.name);
                  }}
                >
                  🤍
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
