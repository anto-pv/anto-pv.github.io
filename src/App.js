import React from 'react';
import './style/App.scss';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Meport from './components/meport';
import Portfolio from './Portfolio';
import Home from './Home';
import SiteMap from './components/sitemap';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Meport/>
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/portfolio" exact component= {Portfolio}/>
        </Switch>
        <SiteMap/>
      </div>
    </Router>
  );
}

export default App;
