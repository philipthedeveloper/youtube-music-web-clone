import React from "react";
import styled from "styled-components";

const AudioMediaCard = ({ data }) => {
  return (
    <AudioMediaCardContainer>
      <ThumbnailImageContainer>
        <ThumbnailImage src={data.thumbnailUrl} />
      </ThumbnailImageContainer>
    </AudioMediaCardContainer>
  );
};

const VideoMediaCard = ({ data }) => {
  return (
    <VideoMediaCardContainer>
      <ThumbnailImageContainer>
        <ThumbnailImage src={data.thumbnailUrl} />
      </ThumbnailImageContainer>
    </VideoMediaCardContainer>
  );
};

const AudioMediaCardContainer = styled.div`
  min-width: 180px;
  aspect-ratio: 1;
  border-radius: 0.2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const VideoMediaCardContainer = styled.div`
  min-width: 320px;
  height: 180px;
  border-radius: 0.2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const ThumbnailImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;
const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export { VideoMediaCard, AudioMediaCard };
