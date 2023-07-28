import React from "react";
import styled from "styled-components";

const MoreButton = ({ fn }) => {
  return <MoreButtonEl onClick={fn}>More</MoreButtonEl>;
};

const MoreButtonEl = styled.button`
  border: none;
  outline: none;
  background: transparent;
  border: 1px solid var(--trans-white);
  padding: 0.6rem 1rem;
  transition: 0.3s ease;
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--white);
  border-radius: 2rem;

  &:hover {
    background: var(--trans-white);
    border-color: transparent;
  }
`;

export default MoreButton;
