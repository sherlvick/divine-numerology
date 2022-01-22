import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavigationMenu from "./containers/NavigationMenu/NavigationMenu";

import GetInTouch from "./components/GetInTouch/GetInTouch";

import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  let { pathname } = useLocation();

  const [notContactPage, setNotContactPage] = useState(true);

  useEffect(() => {
    pathname.indexOf("contact-us") >= 0
      ? setNotContactPage(false)
      : setNotContactPage(true);
  }, [pathname]);

  return (
    <React.Fragment>
      <main style={{ margin: "var(--site-margin)" }}>
        <NavigationMenu />
        <Outlet />
        {notContactPage && <GetInTouch />}
      </main>
      {notContactPage && <Footer />}
    </React.Fragment>
  );
}
// First create buttons component and handle contact us page
export default App;
