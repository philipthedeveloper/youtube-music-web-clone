import React, {
  useState,
  useRef,
  useContext,
  createContext,
  useEffect,
} from "react";

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [modalShown, setModalShown] = useState(false);
  const currentShownModal = useRef(null);
  const dispatcher = useRef(null);

  const hideModal = () => {
    currentShownModal.current.classList.remove("show");
    currentShownModal.current = null;
    setModalShown(false);
    dispatcher.current?.classList.remove("hide");
    dispatcher.current = null;
  };

  const handleDocumentClick = (e) => {
    if (modalShown) {
      let isDescendant = currentShownModal.current.contains(e.target);
      let isCloser =
        e.target.matches("a") ||
        e.target.matches("span:not(.action)") ||
        e.target.matches("i:not(.action)");
      let isToggler = e.target.matches(".close-modal");
      if (isDescendant) {
        if (isCloser) {
          e.target.click();
          hideModal();
        }
      } else if (!isDescendant) {
        if (!isToggler) {
          hideModal();
        } else {
          currentShownModal?.current?.classList.remove("show");
          let el = dispatcher.current;
          el.style.display = "block";
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [modalShown]);

  return (
    <GlobalContext.Provider
      value={{
        currentShownModal,
        setModalShown,
        modalShown,
        dispatcher,
        hideModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const getGlobalContext = () => {
  let data = useContext(GlobalContext);
  return data;
};

export { getGlobalContext };
export default GlobalProvider;
