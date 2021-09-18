import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Items from './components/Items';
import { data } from './data/data'

function App() {
  return (
    <>
      <Header />
      <Contact />
      <Items />
    </>
  );
}

export default App;
