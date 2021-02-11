import React, { useState } from 'react';
import 'normalize.css';
import { Home } from './components/Home';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import { PlantContext } from './components/context/PlantContext';
import Login from './components/Login';
import Signup from './components/Signup';
import { Dashboard } from './components/Dashboard';

function App() {
  const [plantId, setPlantId] = useState();

  return (
    <>
      <GlobalStyles />
      <Typography />

      <PlantContext.Provider value={{ plantId, setPlantId }}>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' render={(props) => <Login {...props} />} />
        <Route exact path='/signup' render={(props) => <Signup {...props} />} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </PlantContext.Provider>
    </>
  );
}

export default App;
