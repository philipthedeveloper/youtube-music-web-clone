import React, { useRef, useState } from "react";
import SideNav from "./components/Navigation/SideNav";
import Main from "./components/MainContent";
import TopNav from "./components/Navigation/TopNav";
import Router from "./router/Router";

const App = () => {
  const appEl = useRef(null);
  const sideNavEl = useRef(null);

  const changeLayout = () => {
    appEl.current?.classList.toggle("hide-nav");
    sideNavEl.current?.classList.toggle("hide");
  };

  return (
    <div className="App hide-nav" ref={appEl}>
      <TopNav changeLayout={changeLayout} />
      <SideNav sideNavEl={sideNavEl} changeLayout={changeLayout} />
      <Router />
    </div>
  );
};

export default App;
