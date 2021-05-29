import React from "react";
import styled from "styled-components";

const Titles = () => {
  return (
    <Container>
      <Title>
        <h1>TOP ANIME</h1>
      </Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  padding-top: 70px;
  color: #2b2b2b;
  font-weight: 500;
`;

export default Titles;
