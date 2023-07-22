import React from 'react'
import { Possibility, Features, Header, Footer, WhatisGPT3, Blog } from './containers';
import { Navbar, Brand, CTA } from './components';
import "./App.css";
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatisGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App
