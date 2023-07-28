import React from "react";
import styled from "styled-components";
import logo from "../../../assets/imgs/user.png";
import { Link, useNavigate } from "react-router-dom";
import MoreButton from "../../MoreButton";
import SliderButton from "../../SliderButton";

const ListenAgainHeader = ({
  handleScroll,
  isBackButtonVisible,
  isForwardButtonVisible,
}) => {
  const navigate = useNavigate();

  const handleMore = () => {
    navigate("/listen-again");
  };
  return (
    <Header>
      <LeftContainer>
        <ProfileImageContainer>
          <ProfileImage src={logo} />
        </ProfileImageContainer>
        <Container>
          <ProfileName>JOHN DOE</ProfileName>
          <LinkItem to={"/listen-again"}>
            <HeaderTitle>Listen again</HeaderTitle>
          </LinkItem>
        </Container>
      </LeftContainer>
      <RightContainer>
        <MoreButton fn={handleMore} />
        <SliderButton
          handleScroll={handleScroll}
          isBackButtonVisible={isBackButtonVisible}
          isForwardButtonVisible={isForwardButtonVisible}
        />
      </RightContainer>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LeftContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;

  @media (max-width: 400px) {
    gap: 0.4rem;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.3rem;

  @media (max-width: 600px) {
    gap: 0.7rem;
  }
`;

const ProfileImageContainer = styled.div`
  width: 60px;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;

  @media (max-width: 600px) {
    width: 40px;
  }
  //   @media (max-width: 400px) {
  //     width: 35px;
  //   }
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Container = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileName = styled.p`
  color: gray;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  font-family: var(--secondary-font);
  color: var(--white);

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: var(--white);
  &:hover {
    text-decoration: underline;
  }
`;

export default ListenAgainHeader;
