import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from '../../assets';

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      {/* google */}
      <div>
        <img src={google} alt="google" />
      </div>

      {/* slack */}
      <div>
        <img src={slack} alt="slack" />
      </div>
      {/* atlassian */}
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      {/* dropbox */}
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
}

export default Brand;
