import React, { useState } from 'react';
import { Home } from './components/Home';
import { Route, Link, useHistory } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import { PlantContext } from './components/context/PlantContext';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [plantId, setPlantId] = useState();

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push('/');
  };

  return (
    <div>
      <GlobalStyles />
      <Typography />

      <nav>
        <Link to='/'>Home</Link>
        {/* 
          logic that sees if the logginIn state is false or true.
          If false then show the Logout nav item,
          If true then show the Login nav item
        */}
        {loggedIn ? (
          <Link to='/' onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </nav>

      <PlantContext.Provider value={{ plantId, setPlantId }}>
        <Route exact path='/' component={Home}></Route>
        <Route
          exact
          path='/login'
          render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />}
        />
        <Route
          exact
          path='/signup'
          render={(props) => <Signup {...props} setLoggedIn={setLoggedIn} />}
        />
      </PlantContext.Provider>
    </div>
  );
}

export default App;
