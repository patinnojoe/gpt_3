import React from 'react';
import { Features, Blog, Footer, Header, WhatGPT3, Possibility } from './containers';
import { Brand, Cta, Navbar } from './components';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
