import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getGlobalContext } from "../../context/GlobalProvider";

const SearchComponent = ({ searchCompRef }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  const searchMatchRef = useRef(null);
  const searchBtnRef = useRef(null);
  const backBtnRef = useRef(null);
  const clearBtnRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [captureFocus, setCaptureFocus] = useState(false);
  const { hideModal } = getGlobalContext();

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = (e) => {
    setSearchValue("");
    searchInputRef.current.focus();
  };

  const handleFocus = (e) => {
    console.log("Focused");
    setIsFocused(true);
    searchCompRef.current.classList.add("focus");
    searchMatchRef.current.classList.add("focus");
  };

  const handleBlur = (e) => {
    console.log("Blured");
    setIsFocused(false);
    searchMatchRef.current.classList.remove("focus");
    searchCompRef.current.classList.remove("focus");
  };

  function handleMouseDown(e) {
    let target = e.target;
    switch (target) {
      case searchBtnRef.current:
        if (isFocused) {
          searchInputRef.current.blur();
          handleBlur();
        } else {
          searchInputRef.current.focus();
          handleFocus();
        }
        e.preventDefault();
        e.stopPropagation();
        break;
      case clearBtnRef.current:
        setSearchValue("");
        e.preventDefault();
        e.stopPropagation();
        break;
      case backBtnRef.current:
        hideModal();
        break;
      default:
        if (searchCompRef?.current.contains(e.target));
        e.target.click();
        hideModal();
        break;
    }
  }

  useEffect(() => {
    searchCompRef.current?.addEventListener("mousedown", handleMouseDown);

    return () => {
      searchCompRef.current?.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isFocused]);

  return (
    <SearchComponentContainer ref={searchCompRef}>
      <SearchIconContainer>
        <i className="fi fi-rr-search search-icon" ref={searchBtnRef}></i>
        <i className="fi fi-rr-arrow-small-left back-icon" ref={backBtnRef}></i>
      </SearchIconContainer>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Search songs, albums, artists, podcasts"
          value={searchValue}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={searchInputRef}
        />
      </SearchInputContainer>
      {searchValue.length > 0 && isFocused && (
        <ClearIconContainer>
          <i className="fi fi-br-cross" ref={clearBtnRef}></i>
        </ClearIconContainer>
      )}
      <SearchMatch ref={searchMatchRef}></SearchMatch>
    </SearchComponentContainer>
  );
};

const SearchComponentContainer = styled.div`
  width: 480px;
  display: flex;
  padding: 0.8rem 1rem;
  background-color: var(--trans-white);
  align-items: center;
  border-radius: 0.5rem;
  gap: 1rem;
  position: relative;
  margin-right: auto;

  &.focus {
    background-color: var(--black);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  i {
    color: var(--white);
    cursor: pointer;
  }

  @media (max-width: 920px) {
    display: none;
    
    &.show {
      display: flex;
      position: fixed;
      z-index: 30;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 600px) {
      &.show {
        width: 95%;
      }
    }
`;

const SearchIconContainer = styled.div`
  cursor: pointer;
  // i {
  //   pointer-events: none;
  // }

  i.back-icon {
    display: none;
  }

  @media (max-width: 920px) {
    i.back-icon {
      display: block;
    }

    i.search-icon {
      display: none;
    }
  }
`;
const ClearIconContainer = styled.div``;
const SearchInputContainer = styled.div`
  flex: 1;
`;
const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: var(--white);

  &::placeholder {
    color: var(--white);
  }

  /* For older browsers */
  &::-webkit-input-placeholder {
    color: var(--white);
  }
  &:-moz-placeholder {
    color: var(--white);
  }
  &::-moz-placeholder {
    color: var(--white);
  }
  &:-ms-input-placeholder {
    color: var(--white);
  }
`;

const SearchMatch = styled.div`
  position: absolute;
  width: 100%;
  min-height: 20px;
  background-color: var(--black);
  top: 100%;
  left: 0;
  border-top: 1px solid var(--trans-white);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: none;

  &.focus {
    display: flex;
  }
`;

export default SearchComponent;
