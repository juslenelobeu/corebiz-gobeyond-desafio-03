import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Items from './components/Items';
import { data } from './data/data'

import "./styles/_global.scss";

function App() {
  return (
    <div className="container">
      <Header {...data.user} />
      <Contact />
      <Items />
    </div>
  );
}

export default App;
