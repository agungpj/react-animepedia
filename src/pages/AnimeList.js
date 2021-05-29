import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { GetPokemonList } from "../actions/pokemonAction";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgSlider from "../components/Carousel";
// import ReactPaginate from "react-paginate";
import { GetAnimeList } from "../actions/animeAction";
import { AnimeSearched } from "../actions/animeAction";

const AnimeList = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const searchHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearched = (e) => {
    e.preventDefault();
    dispatch(AnimeSearched(textInput));
    setTextInput("");
  };
  const { toplist, comedy, adventure, demons, searched } = useSelector(
    (state) => state.AnimeList
  );

  //   root reducer.
  //   const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(GetAnimeList());
  }, []);

  return (
    <Heading>
      <Search>
        <Wrap>
          <input
            type='text'
            className='searchTerm'
            placeholder='What are you looking for?'
            value={textInput}
            onChange={searchHandler}
            // onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type='submit'
            className='searchButton'
            onClick={submitSearched}
          >
            <p>Search</p>
          </button>
        </Wrap>
      </Search>
      <Slider>
        <ImgSlider />
      </Slider>
      {searched.length ? (
        <div>
          {" "}
          <TitleWrap>
            <Title>Searched Anime</Title>
          </TitleWrap>
          <PokemonWrap>
            {searched.map((anime) => {
              return (
                <LinkAnc key={anime.title} to={`/anime/${anime.mal_id}`}>
                  {/* https://api.jikan.moe/v3/anime/Fullmetal%20Alchemist:%20Brotherhood kalo ke title. kalo ke id jd angka */}
                  {/* sinkron sm app js */}
                  <div className='grid-item'>
                    <div className='card'>
                      <img
                        className='card-img'
                        src={anime.image_url}
                        id={anime.mal_id}
                        alt='Rome'
                      />
                      <div className='card-content'>
                        <h1 className='card-header'>{anime.title}</h1>
                        <p>Score : {anime.score}</p>
                      </div>
                    </div>
                  </div>
                </LinkAnc>
              );
            })}
          </PokemonWrap>{" "}
        </div>
      ) : (
        ""
      )}
      <TitleWrap>
        <Title>Top Anime</Title>
      </TitleWrap>
      <PokemonWrap>
        {toplist.map((anime) => {
          return (
            <LinkAnc key={anime.title} to={`/anime/${anime.mal_id}`}>
              {/* https://api.jikan.moe/v3/anime/Fullmetal%20Alchemist:%20Brotherhood kalo ke title. kalo ke id jd angka */}
              {/* sinkron sm app js */}
              <div className='grid-item'>
                <div className='card'>
                  <img
                    className='card-img'
                    src={anime.image_url}
                    id={anime.mal_id}
                    alt='Rome'
                  />
                  <div className='card-content'>
                    <h1 className='card-header'>{anime.title}</h1>
                    <p>Score : {anime.score}</p>
                  </div>
                </div>
              </div>
            </LinkAnc>
          );
        })}
      </PokemonWrap>
      <TitleWrap>
        <Title>Best Adventure</Title>
      </TitleWrap>
      <PokemonWrap>
        {adventure.map((anime) => {
          return (
            <LinkAnc key={anime.title} to={`/anime/${anime.mal_id}`}>
              {/* https://api.jikan.moe/v3/anime/Fullmetal%20Alchemist:%20Brotherhood kalo ke title. kalo ke id jd angka */}
              {/* sinkron sm app js */}
              <div className='grid-item'>
                <div className='card'>
                  <img
                    className='card-img'
                    src={anime.image_url}
                    id={anime.mal_id}
                    alt='Rome'
                  />
                  <div className='card-content'>
                    <h1 className='card-header'>{anime.title}</h1>
                    <p>Score : {anime.score}</p>
                  </div>
                </div>
              </div>
            </LinkAnc>
          );
        })}
      </PokemonWrap>
      <TitleWrap>
        <Title>Best Comedy</Title>
      </TitleWrap>
      <PokemonWrap>
        {comedy.map((anime) => {
          return (
            <LinkAnc key={anime.title} to={`/anime/${anime.mal_id}`}>
              {/* https://api.jikan.moe/v3/anime/Fullmetal%20Alchemist:%20Brotherhood kalo ke title. kalo ke id jd angka */}
              {/* sinkron sm app js */}
              <div className='grid-item'>
                <div className='card'>
                  <img
                    className='card-img'
                    src={anime.image_url}
                    id={anime.mal_id}
                    alt='Rome'
                  />
                  <div className='card-content'>
                    <h1 className='card-header'>{anime.title}</h1>
                    <p>Score : {anime.score}</p>
                  </div>
                </div>
              </div>
            </LinkAnc>
          );
        })}
      </PokemonWrap>
      <TitleWrap>
        <Title>Best Demons</Title>
      </TitleWrap>
      <PokemonWrap>
        {demons.map((anime) => {
          return (
            <LinkAnc key={anime.title} to={`/anime/${anime.mal_id}`}>
              {/* https://api.jikan.moe/v3/anime/Fullmetal%20Alchemist:%20Brotherhood kalo ke title. kalo ke id jd angka */}
              {/* sinkron sm app js */}
              <div className='grid-item'>
                <div className='card'>
                  <img
                    className='card-img'
                    src={anime.image_url}
                    id={anime.mal_id}
                    alt='Rome'
                  />
                  <div className='card-content'>
                    <h1 className='card-header'>{anime.title}</h1>
                    <p>Score : {anime.score}</p>
                  </div>
                </div>
              </div>
            </LinkAnc>
          );
        })}
      </PokemonWrap>
    </Heading>
  );
};

const Search = styled.div`
  z-index: 1;
  width: 30%;
  position: fixed;
  top: 5%;
  left: 80%;
  transform: translate(-50%, -50%);
`;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;
const Heading = styled.div`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
`;

const Slider = styled.div`
  padding-top: 50px;
  background-color: black;
`;

const LinkAnc = styled(Link)`
  text-decoration: none;
  border: 2px solid white;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  width: 100%;
  object-fit: cover;
  margin: 20px 0;
`;
const PokemonWrap = styled.div`
  min-height: 80vh;
  padding: 40px 10px;

  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: start;

  display: grid;
  /* repeat, autofit 1 gambar 500px sisanya kebawah. */
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const Pokemons = styled.div`
  border: 2px solid white;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  width: 100%;
  object-fit: cover;
  margin: 20px 0;

  p {
    text-transform: uppercase;
  }
`;
const TitleWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  padding-top: 70px;
  color: #2b2b2b;
  font-weight: 500;
`;
export default AnimeList;
