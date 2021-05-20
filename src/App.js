import React from 'react';
import './style/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Portfolio from './Portfolio';
import Home from './Home';
import SiteMap from './components/sitemap';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
        <Route path="/portfolio" component= {Portfolio}/>
        <Route path="/" exact component= {Home}/>
        </Switch>
        <SiteMap/>
      </div>
    </Router>
  );
}

export default App;
