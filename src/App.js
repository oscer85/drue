
import React from 'react';
import Hamburger from './components/hamburger';
import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutSection from './components/about-section'
import CommercialSection from './components/commercial-section'
import DesigneSection from "./components/designe-section"
import LogoConceptSection from './components/logo-concept-section';
import PressSection from './components/press-section'
import HeaderSection from './components/header-section';

import './App.css';

function App() {
  return (

    <div className="App">

      <Router>
        <div className="content">
          <HeaderSection />
          <Hamburger />
          <Nav />
          <Switch>
            <Route path="/" exact component={AboutSection} />
            <Route path="/about" component={AboutSection} />
            <Route path="/commercial" component={CommercialSection} />
            <Route path="/designe" component={DesigneSection} />
            <Route path="/logo-concept" component={LogoConceptSection} />
            <Route path="/press" component={PressSection} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;