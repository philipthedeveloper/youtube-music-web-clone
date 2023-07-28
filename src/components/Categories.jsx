import React from "react";
import styled from "styled-components";

const categories = ["Relax", "Energize", "Workout", "Commute", "Focus"];

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryButton key={category}>{category}</CategoryButton>
      ))}
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  margin: 2rem 0 3rem;
  display: flex;
  gap: 0.7rem;

  @media (max-width: 920px) {
    margin: 1rem 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      appearance: none;
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      -webkit-appearance: none;
    }
  }
`;

const CategoryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.4rem;
  padding: 0.6rem 0.8rem;
  font-size: 0.9rem;
  background: var(--trans-white);
  transition: 0.2s ease;
  color: var(--white);

  &:hover {
    background: gray;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.7rem;
  }
`;

export default Categories;
