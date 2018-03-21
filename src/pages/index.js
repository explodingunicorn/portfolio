import React, { Component } from 'react'
import Background from '../components/background';
import Link from 'gatsby-link';
import './index.scss';

class IndexPage extends Component {
  render() {
    return (
      <div className="home">
        <div className="hero">
          <Background></Background>
          <h1 className="large text-mint-green">Corey Robinson</h1>
        </div>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    );
  }
}

export default IndexPage
