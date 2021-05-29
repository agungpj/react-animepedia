import axios from "axios";

export const GetAnimeList = () => async (dispatch) => {
  const topList = await axios.get(
    `https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1&&order_by=members&sort=desc&limit=8`
  );

  const Adventure = await axios.get(
    `https://api.jikan.moe/v3/search/anime?q=&page=2&genre=2&&order_by=members&sort=desc&limit=8`
  );
  const Comedy = await axios.get(
    `https://api.jikan.moe/v3/search/anime?q=&page=2&genre=4&&order_by=members&sort=desc&limit=8`
  );
  const Demons = await axios.get(
    `https://api.jikan.moe/v3/search/anime?q=&page=1&genre=6&&order_by=members&sort=desc&limit=8`
  );
  try {
    dispatch({
      type: "ANIME_LIST_LOAD",
    });

    dispatch({
      type: "ANIME_LIST_SUCCESS",
      payload: {
        toplist: topList.data.results,
        adventure: Adventure.data.results,
        comedy: Comedy.data.results,
        demons: Demons.data.results,
      },
      //wajib.
    });
  } catch (e) {
    dispatch({
      type: "ANIME_LIST_FAIL",
    });
  }
};

export const GetAnimeDetail = (pokemon) => async (dispatch) => {
  const animeDetailUrl = () => `https://api.jikan.moe/v3/anime/${pokemon}`;

  const res = await axios.get(animeDetailUrl());

  dispatch({
    type: "GET_DETAIL",
    payload: res.data,
    animeId: pokemon,
  });
};

export const AnimeSearched = (anime_name) => async (dispatch) => {
  const animeSearchedUrl = () =>
    `https://api.jikan.moe/v3/search/anime?q=${anime_name}&page=1`;

  const res = await axios.get(animeSearchedUrl(anime_name));
  dispatch({
    type: "ANIME_SEARCHED",
    payload: {
      searched: res.data.results,
    },
  });
};
