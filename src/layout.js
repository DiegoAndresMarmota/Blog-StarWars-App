import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/planetView";
import { Single } from "./views/single";
import { Vehicles } from "./views/vehicles";
import injectContext from "./store/appContext";

import {Navbar} from "./component/Navbar"
import { Footer } from "./component/Footer";
import { People } from "./component/People";
import { Planets } from "./component/Planets";
import { VehiclesFront } from "./component/VehiclesFront";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/demo/:idplanet">
              <Planets />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles />
            </Route>
            <Route exact path="/vehicles/:idvehicles">
              <VehiclesFront />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/personajes/:idpersonaje">
              <People />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
