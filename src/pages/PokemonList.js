import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../actions/pokemonAction";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgSlider from "../components/Carousel";
import Title from "../components/Title";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  const [search, setSearch] = useState("");
  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
  useEffect(() => {
    FetchData(1);
  }, []);

  return (
    <Heading>
      <Slider>
        <ImgSlider />
      </Slider>
      <Title />
      <Container>
        <PokemonWrap>
          {pokemonList.data.map((pokemon) => {
            {
              return (
                <Pokemons>
                  <div class='wrap'>
                    <div class='search'>
                      <input
                        type='text'
                        className='searchTerm'
                        placeholder='What are you looking for?'
                        onChange={(e) => setSearch(e.target.value)}
                      />

                      <button
                        type='submit'
                        className='searchButton'
                        onClick={() => props.history.push(`/pokemon/${search}`)}
                      >
                        <p>Search</p>
                      </button>
                    </div>
                  </div>
                  <p>{pokemon.name}</p>
                  <LinkAnc to={`/pokemon/${pokemon.name}`}>View</LinkAnc>
                </Pokemons>
              );
            }
          })}
          {pokemonList.data !== undefined && (
            <ReactPaginate
              containerClassName={"pagination"}
              pageCount={Math.ceil(pokemonList.count / 15)}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              onPageChange={(data) => FetchData(data.selected + 1)}
          
            />
          )}
        </PokemonWrap>
      </Container>
    </Heading>
  );
};

const Heading = styled.div``;

const Slider = styled.div`
  padding-top: 50px;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
const LinkAnc = styled(Link)`
  text-decoration: none;
  color: white;
`;
const PokemonWrap = styled.div``;
const Pokemons = styled.div`
  background-color: #d45d31;
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;

  margin: 20px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    color: white;
    text-transform: uppercase;
  }
`;
export default PokemonList;
