import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Nav from './components/nav';
import Home from './pages';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
