import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import MoreButton from "./MoreButton";
import SliderButton from "./SliderButton";
import ListenAgain from "./Sections/ListenAgain";

const Main = () => {
  return (
    <MainContainer>
      <MainContentContainer>
        <Categories />
        <ListenAgain />
      </MainContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  height: 100%;
  grid-column: 2 / -1;
  grid-row: 2 / -1;
  // background-color: red;
  min-width: 100%;
  // max-width: 100%;

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 0 1rem;
  }
`;

const MainContentContainer = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Main;
