import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ListenAgainHeader from "./Headers/ListenAgainHeader";
import data from "../../dummy-data/media-data";
import { AudioMediaCard, VideoMediaCard } from "./Cards/MediaCard";

const ListenAgain = () => {
  const cardContainerRef = useRef(null);
  const parentCardContainerRef = useRef(null);
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);
  const [isForwardButtonVisible, setIsForwardButtonVisible] = useState(true);

  const handleScroll = (value) => {
    let contScrollWidth = cardContainerRef?.current?.scrollWidth;
    let currentScroll = cardContainerRef.current.scrollLeft;
    let visibleWidth = cardContainerRef?.current.getBoundingClientRect().width;
    if (value > 0) {
      let availableScroll = contScrollWidth - currentScroll - visibleWidth;
      if (availableScroll > visibleWidth) {
        let scrollingTo = currentScroll + visibleWidth;
        cardContainerRef.current.scrollTo({
          top: 0,
          left: scrollingTo,
          behavior: "smooth",
        });
        setIsBackButtonVisible(true);
        setIsForwardButtonVisible(true);
      } else {
        cardContainerRef.current.scrollTo({
          top: 0,
          left: contScrollWidth,
          behavior: "smooth",
        });
        setIsForwardButtonVisible(false);
        setIsBackButtonVisible(true);
      }
    } else if (value < 0) {
      let availableScroll = currentScroll - visibleWidth;
      if (availableScroll > 0) {
        cardContainerRef.current.scrollTo({
          top: 0,
          left: availableScroll,
          behavior: "smooth",
        });
        setIsForwardButtonVisible(true);
        setIsBackButtonVisible(true);
      } else {
        cardContainerRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setIsForwardButtonVisible(true);
        setIsBackButtonVisible(false);
      }
    }
  };

  return (
    <ListenAgainContainer>
      <ListenAgainHeader
        handleScroll={handleScroll}
        isBackButtonVisible={isBackButtonVisible}
        isForwardButtonVisible={isForwardButtonVisible}
      />
      <Container ref={parentCardContainerRef}>
        <ListenCardContainer ref={cardContainerRef}>
          {data.map((data, index) => {
            if (index % 3 === 0 || index % 5 === 0) {
              return <AudioMediaCard data={data} key={index} />;
            }
            return <VideoMediaCard data={data} key={index} />;
          })}
        </ListenCardContainer>
      </Container>
    </ListenAgainContainer>
  );
};

const ListenAgainContainer = styled.div`
  width: 100%;
`;

const ListenCardContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  //   background: blue;
  overflow: auto;
  margin: 1rem 0 3rem;
  transition: 0.4s ease;

  &::-webkit-scrollbar {
    appearance: none;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
  }
`;

const Container = styled.div`
  overflow: hidden;
`;

export default ListenAgain;
