import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";

const menuLinkData = [
  {
    name: "Home",
    path: "/",
    icon: <i className="fi fi-sr-house-crack"></i>,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: <i className="fi fi-sr-navigation"></i>,
  },
  {
    name: "Library",
    path: "/library",
    icon: <i className="fi fi-sr-play-alt"></i>,
  },
];

const SideNav = ({ sideNavEl, changeLayout }) => {
  return (
    <SideNavContainer ref={sideNavEl} className="hide">
      <Underlay className="underlay" onClick={changeLayout} />
      <Menu>
        <MenuButton onClick={changeLayout}>
          <i className="fi fi-br-cross"></i>
        </MenuButton>
        <LogoContainer>
          <LogoLink to={"/"}>
            <i className="fi fi-ss-guitar"></i>
            <LogoText>Music</LogoText>
          </LogoLink>
        </LogoContainer>
      </Menu>
      <MenuLinks className="menu-links-container">
        {menuLinkData.map((item) => (
          <MenuLink {...item} key={Object.values(item).join("-")} />
        ))}
      </MenuLinks>
      <Seperator className="seperator" />
      <NewPlaylistBtn className="new-playlist-btn">
        <i className="fi fi-br-plus"></i>New Playlist
      </NewPlaylistBtn>
    </SideNavContainer>
  );
};

const Underlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: 0;
  animation-name: animateOpacity;
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;

  @keyframes animateOpacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const SideNavContainer = styled.nav`
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / -1;
  box-shadow: 4px 15px 10px var(--shadow);
  transition: 0.4s ease;
  padding: 0 1rem;
  position: relative;
  z-index: 5;
  width: 250px;

  & > *:not(.underlay) {
    position: relative;
    z-index: 5;
  }

  .underlay {
    display: none;
  }

  &.hide {
    width: 100px;

    .menu-links-container {
      align-items: flex-start;
    }

    .menu-link {
      flex-direction: column;
      justify-content: center;
      gap: 0.2rem;
      transition: none;

      p.menu-link-name {
        font-size: 0.6rem;
      }
    }

    .seperator {
      display: none;
    }

    .new-playlist-btn {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 250px;
    top: 0;
    left: 0px;
    height: 100%;
    background-color: var(--main-background);
    margin-right: 0px;

    .underlay {
      display: block;
    }

    &.hide {
      left: -250px;
      margin-right: 0px;

      .underlay {
        display: none;
      }

      .seperator {
        display: none;
      }

      .new-playlist-btn {
        display: none;
      }

      .menu-link {
        flex-direction: row;
        align-items: center;
        justify-content: initial;
        gap: 1rem;
        transition: 0.4s ease;

        p.menu-link-name {
          font-size: 1rem;
        }
      }
    }
  }
`;

const Menu = styled.div`
  width: 200px;
  display: none;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
  height: 65px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  padding: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;

  i {
    color: var(--white);
    font-size: 1.3rem;
  }
`;

const LogoContainer = styled.div`
  i {
    color: var(--white);
    font-size: 0.9rem;
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
`;

const LogoText = styled.h2`
  font-family: var(--secondary-font);
  font-weigth: bold;
  text-transform: uppercase;
  color: var(--white);
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 0;
`;

const Seperator = styled.div`
  height: 1px;
  width: calc(100% - 2.2rem);
  background-color: var(--white);
  margin: 0rem 1.1rem 1.5rem;
  display: block;
`;

const NewPlaylistBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  transition: background-color 0.4s ease;
  background-color: var(--trans-white);
  width: calc(100% - 2.2rem);
  margin: 0 1.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  gap: 0.5rem;
  color: var(--white);
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: gray;
  }
`;

export default SideNav;
