import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
