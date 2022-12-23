import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const deleteTask = (key) => {
    actions.removeFavorite(key);
  };
  return (
    <nav className="navbar navbar-expand">
      <Link to="/">
        <button className="button1 navbar-brand mb-0 h1">Home</button>
      </Link>
      <Link to="/">
        <button className="button1 navbar-brand mb-0 h1">People</button>
      </Link>
      <Link to="/demo">
        <button className="button1 navbar-brand mb-0 h1">Planets</button>
      </Link>
      <Link to="/vehicles">
        <button className="button1 navbar-brand mb-0 h1">Vehicles</button>
      </Link>
      <div className="dropdown">
        <button
          type="button"
          className="button1 dropdown-toggle navbar-brand mb-0 h1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul class="dropdown-menu">
          {store.fav?.map((e, i) => {
            return (
              <li className="dropdown-item d-flex justify-content-between">
                {" "}
                {e.name}{" "}
                <button
                  onClick={() => {
                    deleteTask(i);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
