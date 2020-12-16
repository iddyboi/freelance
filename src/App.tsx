import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Nav from './components/nav';
import Home from './pages';
import Work from './pages/work';
import BudgetCalc from './pages/work/budget-calculator';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route exact path='/work/budget' component={BudgetCalc} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
