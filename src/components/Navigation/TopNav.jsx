import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchComponent from "./SearchComponent";
import avatar from "../../assets/imgs/user.png";
import ModalPortal from "../ModalPortal";
import { getGlobalContext } from "../../context/GlobalProvider";

const centerModalItemData = [
  {
    name: "Your Channel",
    path: "/channel/your-channel-id",
    icon: <i className="fi fi-rr-circle-user"></i>,
    type: "link",
  },
  {
    name: "Paid memberships",
    path: "/paid-memberships",
    icon: <i className="fi fi-rr-usd-circle"></i>,
    type: "link",
  },
  {
    name: "Switch account",
    icon: <i className="fi fi-rr-users action"></i>,
    type: "buttton",
  },
  {
    name: "Sign out",
    path: "/logout",
    icon: <i className="fi fi-rr-sign-out-alt"></i>,
    type: "link",
  },
];

const bottomModalItemData = [
  {
    name: "Upload music",
    type: "button",
    icon: <i className="fi fi-rr-cloud-upload-alt"></i>,
  },
  {
    name: "History",
    type: "link",
    path: "/history",
    icon: <i className="fi fi-rr-time-past"></i>,
  },
  {
    name: "Settings",
    type: "link",
    path: "/settings",
    icon: <i className="fi fi-rr-settings"></i>,
  },
  {
    name: "Terms & privacy policy",
    type: "link",
    blank: true,
    path: "https://youtube.com/t/terms?chromeless=1",
    icon: <i className="fi fi-rr-shield-check"></i>,
  },
  {
    name: "Help",
    type: "button",
    icon: <i className="fi fi-rr-interrogation"></i>,
  },
  {
    name: "Send feedback",
    type: "button",
    icon: <i className="fi fi-rr-comment-exclamation"></i>,
  },
];

const TopNav = ({ changeLayout }) => {
  const topNavRef = useRef(null);
  const topNavModal = useRef(null);
  const searchCompRef = useRef(null);
  const { setModalShown, currentShownModal, dispatcher } = getGlobalContext();

  const handleChangeLayout = (e) => {
    changeLayout(e);
  };

  const toggleModal = (e) => {
    if (!topNavModal.current.classList.contains("show")) {
      topNavModal.current.classList.add("show");
      currentShownModal.current = topNavModal.current;
      setModalShown(true);
    } else {
      topNavModal.current.classList.remove("show");
      currentShownModal.current = null;
      setModalShown(false);
    }
  };

  const toggleSearchBox = (e) => {
    if (!searchCompRef.current?.classList.contains("show")) {
      searchCompRef.current.classList.add("show");
      currentShownModal.current = searchCompRef.current;
      searchCompRef.current.querySelector("input").focus();
      setModalShown(true);
      e.target.classList.add("hide");
      dispatcher.current = e.target;
    } else {
      searchCompRef.current.classList.remove("show");
      currentShownModal.current = null;
      setModalShown(false);
    }
  };

  return (
    <TopNavContainer>
      <LeftMenu>
        <MenuButton onClick={handleChangeLayout}>
          <i className="fi fi-br-menu-burger"></i>
        </MenuButton>
        <LogoContainer>
          <LogoLink to={"/"}>
            <i className="fi fi-ss-guitar"></i>
            <LogoText>Music</LogoText>
          </LogoLink>
        </LogoContainer>
      </LeftMenu>
      <RightMenu>
        <RightMenuContentContainer ref={topNavRef}>
          <SearchComponent searchCompRef={searchCompRef} />
          <Actions>
            <i
              className="fi fi-rr-search close-modal"
              onClick={toggleSearchBox}
            ></i>
            <i className="fi fi-sr-wifi-alt" title="Connect to a device"></i>
            <ProfieImageContainer onClick={toggleModal} className="close-modal">
              <ProfileImage src={avatar} />
            </ProfieImageContainer>
          </Actions>
          <TopNavModal ref={topNavModal}>
            <ModalTop>
              <ModalTopImageContainer>
                <ModalTopImage src={avatar} />
              </ModalTopImageContainer>
              <ModalTopTextContainer>
                <ModalTopText>Your Profile or Channel Name</ModalTopText>
                <ManageYourAccount>
                  Manage your Google Account
                </ManageYourAccount>
              </ModalTopTextContainer>
            </ModalTop>
            <ModalCenter>
              <ModalCenterList>
                {centerModalItemData.map((item) => {
                  if (item.type === "link") {
                    return (
                      <ModalCenterListItem key={item.name}>
                        <ModalCenterLinkItem
                          to={item.path}
                          target={item?.blank && "_blank"}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </ModalCenterLinkItem>
                      </ModalCenterListItem>
                    );
                  } else {
                    return (
                      <ModalCenterListItem key={item.name}>
                        <ModalCenterButtonItem>
                          {item.icon}
                          <span className="action">{item.name}</span>
                        </ModalCenterButtonItem>
                      </ModalCenterListItem>
                    );
                  }
                })}
              </ModalCenterList>
            </ModalCenter>
            <ModalCenter>
              <ModalCenterList>
                {bottomModalItemData.map((item) => {
                  if (item.type === "link") {
                    return (
                      <ModalCenterListItem key={item.name}>
                        <ModalCenterLinkItem
                          to={item.path}
                          target={item?.blank && "_blank"}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </ModalCenterLinkItem>
                      </ModalCenterListItem>
                    );
                  } else {
                    return (
                      <ModalCenterListItem key={item.name}>
                        <ModalCenterButtonItem>
                          {item.icon}
                          <span className="action">{item.name}</span>
                        </ModalCenterButtonItem>
                      </ModalCenterListItem>
                    );
                  }
                })}
              </ModalCenterList>
            </ModalCenter>
          </TopNavModal>
        </RightMenuContentContainer>
      </RightMenu>
    </TopNavContainer>
  );
};

const TopNavContainer = styled.nav`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
`;

const LeftMenu = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;

const RightMenu = styled.div`
  flex: 1;
`;

const RightMenuContentContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  //   &.auto {
  //     margin: auto;
  //     width: 80%;
  //   }
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

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: baseline;

  i {
    font-size: 1.7rem;
    color: var(--white);
    cursor: pointer;
  }

  i.close-modal {
    display: none;
  }

  @media (max-width: 920px) {
    i.close-modal {
      display: block;
    }

    i.hide.close-modal {
      display: none;
    }
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const ProfieImageContainer = styled.div`
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--trans-white);
  cursor: pointer;
`;

const TopNavModal = styled.div`
  width: 300px;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 100%;
  display: none;
  padding-bottom: 1rem;

  &.show {
    display: block;
  }
`;

const ModalTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
`;

const ModalTopImageContainer = styled.div`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const ModalTopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ModalTopTextContainer = styled.div``;

const ModalTopText = styled.p`
  color: var(--white);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const ManageYourAccount = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: var(--blue);
`;

const ModalCenter = styled.div`
  padding: 0.3rem 0;

  border-top: 1px solid var(--trans-white);
`;

const ModalCenterList = styled.ul`
  list-style: none;
`;
const ModalCenterListItem = styled.li`
  button,
  a {
    padding: 0.6rem 1rem;
    display: flex;
    gap: 1rem;
    text-decoration: none;
    color: var(--white);
    transition: 0.3s ease;
    cursor: pointer;
    background: transparent;
    width: 100%;
  }

  i {
    display: inline-block;
    font-size: 1.2rem;
    height: 100%;
  }

  span {
    font-size: 0.9rem;
  }
`;

const ModalCenterButtonItem = styled.button`
  border: none;
  outline: none;

  &:hover {
    background-color: gray;
  }
`;

const ModalCenterLinkItem = styled(Link)`
  &:hover {
    background-color: gray;
  }
`;

export default TopNav;
