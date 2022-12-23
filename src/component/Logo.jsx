import React from 'react';
import logo from "../img/Star_Wars_Logo.svg.png"

const Logo = () => {
    return (
      <div className="container text-center">
        <img
          src={logo}
          alt="logo starwars"
          width="420"
          height="250"
          className="col align-self-center"
        />
      </div>
    );
}

export default Logo;
