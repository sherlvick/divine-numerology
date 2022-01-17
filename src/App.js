import { Outlet, Link } from 'react-router-dom';

import NavigationMenu from './containers/NavigationMenu/NavigationMenu';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
