import { Outlet } from 'react-router-dom';

import NavigationMenu from './containers/NavigationMenu/NavigationMenu';

function App() {
  return (
    <div className="App" style={{margin:"2vh 3vw"}}>
      <NavigationMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
