import React from 'react';
import Hamburger from './components/hamburger';
import Nav from './components/nav'
import Content from './components/content'


import './App.css';

function App() {
  return (
    <div className="App">
      <Hamburger />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
