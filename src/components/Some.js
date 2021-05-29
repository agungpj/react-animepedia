import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonAction";
import styled from "styled-components";

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  //eksekusi individual select pokemon
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  //memasukkan state dr reducer.
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);

  const pokeData = pokemonState.data[pokemonName];
  console.log(pokeData);

  return (
    <Container>
      {/* manggil reducer */}
      {pokemonState.loading && <p>loading...</p>}
      {pokemonState.errorMsg !== "" && <p>{pokemonState.errorMsg}</p>}
      <PokemonIndividual>
        <h1> {pokemonName}</h1>
      </PokemonIndividual>
      <Spirit>
        <h1>Sprites</h1>
      </Spirit>
      <ImgSpirit>
        <img src={pokeData?.sprites?.front_default} alt='' />
        <img src={pokeData?.sprites?.front_shiny} alt='' />
        <img src={pokeData?.sprites?.back_default} alt='' />
        <img src={pokeData?.sprites?.back_shiny} alt='' />
      </ImgSpirit>

      <AbilityText>
        <h1>Ability</h1>
      </AbilityText>
      <AbilityData>
        {pokeData?.abilities.map((ability) => (
          <p>{ability?.ability.name}</p>
        ))}
      </AbilityData>
      <StatsText>
        <h1>Stats</h1>
      </StatsText>
      <StatData>
        {pokeData?.stats.map((stats) => (
          <p>
            {stats?.stat.name} {stats?.base_stat}
          </p>
        ))}
      </StatData>
    </Container>
  );
};

export default Pokemon;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
`;
const StatsText = styled.div`
  padding-bottom: 20px;
  color: white;
  display: flex;
  justify-content: center;
`;

const StatData = styled.div`
  padding-bottom: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AbilityText = styled.div`
  padding-bottom: 20px;
  color: white;
  display: flex;
  justify-content: center;
`;

const AbilityData = styled.div`
  padding-bottom: 20px;
  color: white;
  display: flex;
  justify-content: center;
`;

const PokemonIndividual = styled.div`
  padding-bottom: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spirit = styled.div`
  padding-bottom: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgSpirit = styled.div`
  padding-bottom: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
