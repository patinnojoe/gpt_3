import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="GPT-3 is an innovative AI technology, designed to fascilitate everyday activities, through real intelligence, GPT-3 is an innovative AI technology, designed to fascilitate everyday activities, through real intelligenceGPT-3 is an innovative AI technology, designed to fascilitate everyday activities, through real intelligence, GPT-3 is an innovative AI technology, designed to fascilitate everyday activities, through real intelligence"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text"> The Possibilities are Beyound your Imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="GPT-3 is an innovative AI technology, designed to fascilitate everyday activities, through real intelligence"
        />
        <Feature
          title="Knoeledgebase"
          text="GPT-3 is an innovative AI technology, designed to fascilitate everyday activities, through real intelligence"
        />
        <Feature
          title="Education"
          text="GPT-3 is an innovative AI technology, designed to fascilitate everyday activities, through real intelligence"
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
