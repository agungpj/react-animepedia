import { combineReducers } from "redux";
// import PokemonListReducer from "./PokemonReducer";
// import PokemonMultipleReducer from "./PokemonMultipleReducer";
import animeReducer from "./animeReducer";
import animeDetailReducer from "./animeDetailReducer";

const rootReducer = combineReducers({
  // PokemonList: PokemonListReducer,
  // Pokemon: PokemonMultipleReducer,
  AnimeList: animeReducer,
  Anime: animeDetailReducer,
});

export default rootReducer;
