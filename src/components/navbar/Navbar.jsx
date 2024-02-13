import React, { useState } from 'react';
import './navbar.css';
import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri';
import { logoSVG } from '../../assets';

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>

      <p>
        <a href="#wgpt3">What is GPT3</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>

      <p>
        <a href="#features">Case Studies</a>
      </p>

      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-link">
        {/* logo here */}
        <div className="gpt3__navbar-link-logo">
          <img src={logoSVG} alt="" />
        </div>

        {/* nav links */}
        <div className="gpt3__navbar-link_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="submit">Sign up</button>
      </div>

      {/* for mobile */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Fill
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
      </div>

      {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-link_container-links">
            <Menu />
          </div>

          <div className="gpt3__navbar-link_container-links-sign">
            <p>Sign in</p>
            <button type="submit">Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
