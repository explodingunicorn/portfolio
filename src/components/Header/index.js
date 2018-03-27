import React from 'react';
import Link from 'gatsby-link';
import './Header.scss';

const Header = () => (
  <div className="navigation">
    <div className="main-container">
      <div className="col-6 flex">
        <div className="spacer"/>
        <Link to="/">
          home
          <div className="deco"/>
        </Link>
        <Link to="/projects">
          projects
          <div className="deco"/>
        </Link>
        <Link to="/writing">
          writing
          <div className="deco"/>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
