import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAnimeDetail } from "../actions/animeAction";
import styled from "styled-components";

const AnimeDetail = (props) => {
  const animeID = props.match.params.anime;
  const dispatch = useDispatch();

  const animeState = useSelector((state) => state.Anime);

  // root reducer
  console.log(animeState);
  // jadi ke spesifik data.id

  useEffect(() => {
    dispatch(GetAnimeDetail(animeID));
  }, []);
  //memasukkan state dr reducer.
  const animeData = animeState.data[animeID];

  //mendapatkan api sesuai id.
  console.log(animeData);

  return (
    <Container>
      <ImgWrap>
        <ImgAnime src={animeData?.image_url} />
      </ImgWrap>
      <TitleWrap>
        <Title>
          {animeData?.title} ({animeData?.title_japanese})
        </Title>
        <JpnTitle>Rating: {animeData?.rating}</JpnTitle>
        <Subtitle>{animeData?.synopsis}</Subtitle>
      </TitleWrap>
    </Container>
  );
};

export default AnimeDetail;

const Container = styled.div`
  padding-top: 100px;
  margin-left: 30px;

  z-index: 1;
  display: flex;
  flex-direction: row;
`;

const ImgAnime = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 300px;
`;

const ImgWrap = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
`;
const Title = styled.h1`
  text-transform: uppercase;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.5;
`;
const Subtitle = styled.p`
  width: 90%;
  text-align: justify;
  text-justify: inter-character;
`;
const JpnTitle = styled.p`
  font-size: 15px;
  padding: 20px;
  text-transform: uppercase;
`;
