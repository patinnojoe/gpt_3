import React from 'react';
import './header.css';
import { ai, people } from '../../assets';

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Lets Build Something Amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="gpt3__header-content-input">
          <input type="email" placeholder="Your email address here" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
}

export default Header;
