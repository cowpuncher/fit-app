import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Enter from './components/screen/Enter/Enter';
import Settings from './components/screen/Settings/Settings';
import Profile from './components/screen/Profile/Profile';

function App() {
  return (
    <div className="App-main">
      <ul>
        <li>
          <NavLink to="/">
            Enter
          </NavLink>
        </li>
        <li>
          <NavLink to="/Settings">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/Profile">
            Profile
          </NavLink>
        </li>
      </ul>
      <Route 
        path="/"
        exact
        component={Enter}
      />
      <Route
        path="/Profile"
        exact
        component={Profile}
      />
      <Route
        path="/Settings"
        exact
        component={Settings}
      />
    </div>
  );
}

export default App;
