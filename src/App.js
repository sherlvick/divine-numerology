import { Outlet } from 'react-router-dom';

import NavigationMenu from './containers/NavigationMenu/NavigationMenu';

import GetInTouch from './components/GetInTouch/GetInTouch';

import Footer from './components/Footer/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <main style={{margin: "var(--site-margin)"}}>
      <NavigationMenu />
        <Outlet />
        <GetInTouch />
    </main>
    <Footer />
    </React.Fragment>
  );
}
// First create buttons component and handle contact us page
export default App;
