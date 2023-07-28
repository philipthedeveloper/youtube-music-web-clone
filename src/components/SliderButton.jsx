import React, { useState } from "react";
import styled from "styled-components";

const SliderButton = ({
  handleScroll,
  isBackButtonVisible,
  isForwardButtonVisible,
}) => {
  // const [current, setCurrent] = useState("first");

  return (
    <SliderBtnContainer>
      <SliderButtonEl
        disabled={!isBackButtonVisible}
        onClick={() => handleScroll(-1)}
      >
        <i className="fi fi-rr-angle-small-left"></i>
      </SliderButtonEl>
      <SliderButtonEl
        disabled={!isForwardButtonVisible}
        onClick={() => handleScroll(1)}
      >
        <i className="fi fi-rr-angle-small-right"></i>
      </SliderButtonEl>
    </SliderBtnContainer>
  );
};

const SliderBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  @media (max-width: 600px) {
    gap: 0.6rem;
  }

  @media (max-width: 400px) {
    gap: 0.4rem;

    button {
      width: 30px;
    }
  }
`;

const SliderButtonEl = styled.button`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: 0.3s ease;
  border: 1px solid var(--white);

  &[disabled] {
    color: var(--trans-white);
    border-color: var(--trans-white);
    cursor: initial;
  }

  &:not([disabled]):hover {
    border-color: transparent;
    background: var(--trans-white);
  }

  i {
    font-size: 1.2rem;
    height: 20px;
  }
`;

export default SliderButton;
