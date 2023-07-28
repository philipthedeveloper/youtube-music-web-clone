import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = ({ path, name, icon: Icon }) => {
  return (
    <LinkItem className="menu-link" to={path}>
      {Icon}
      <Name className="menu-link-name">{name}</Name>
    </LinkItem>
  );
};

const Name = styled.p`
  color: var(--white);
`;

const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.1rem;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.8rem;
  transition: 0.4s ease;

  &:hover {
    background-color: gray;
  }

  i {
    color: var(--white);
    font-size: 1.5rem;
  }
`;

export default MenuLink;
