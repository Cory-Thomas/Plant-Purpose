import React, { useState } from 'react';
import 'normalize.css';
import { Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import { Home } from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { Dashboard } from './components/pages/Dashboard';
import { MyPlantsPage } from './components/pages/MyPlantsPage';
import { Tasks } from './components/pages/Tasks';
import { NotesPage } from './components/pages/NotesPage';
import { Settings } from './components/pages/Settings';
import { Notifications } from './components/pages/Notifications';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PlantContext } from './components/context/PlantContext';

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
        <PrivateRoute exact path='/myplants' component={MyPlantsPage} />
        <PrivateRoute exact path='/tasks' component={Tasks} />
        <PrivateRoute exact path='/notes' component={NotesPage} />
        <PrivateRoute exact path='/settings' component={Settings} />
        <PrivateRoute exact path='/notifications' component={Notifications} />
      </PlantContext.Provider>
    </>
  );
}

export default App;
