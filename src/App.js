import React from 'react';
import 'normalize.css';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import userReducer from './store/reducers/users';
import plantReducer from './store/reducers/plants';
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

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userR: userReducer,
  plantR: plantReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' render={(props) => <Login {...props} />} />
          <Route
            exact
            path='/signup'
            render={(props) => <Signup {...props} />}
          />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/myplants' component={MyPlantsPage} />
          <PrivateRoute exact path='/tasks' component={Tasks} />
          <PrivateRoute exact path='/notes' component={NotesPage} />
          <PrivateRoute exact path='/settings' component={Settings} />
          <PrivateRoute exact path='/notifications' component={Notifications} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
