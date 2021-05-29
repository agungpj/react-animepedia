import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import PokemonList from "./pages/PokemonList";
// import Pokemon from "./components/Some";
import Navbar from "./components/Navbar";
import AnimeList from "./pages/AnimeList";
import AnimeDetail from "./pages/AnimeDetail";

import "./App.css";
const App = () => {
  return (
    <div className='App'>
      <Navbar />

      {/* route akan active, untuk styling. */}

      {/* <ImgSlider /> */}
      <Switch>
        <Route path={"/"} exact component={AnimeList} />
        <Route path={"/anime/:anime"} component={AnimeDetail} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
};

export default App;
