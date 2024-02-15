import React from 'react';
import './feature.css';

function Feature(props) {
  return (
    <div className="gpt3__features-container__features">
      <div className="gpt3__features-container__features-title">
        <div />
        <h1>{props.title}</h1>
      </div>
      <div className="gpt3__features-container__features-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Feature;
