import React, { Component } from 'react'
import Link from 'gatsby-link';
import Background from '../components/background';
import Excerpt from '../components/excerpt';
import './index.scss';

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {

  const Work = edges
    .filter(edge => edge.node.frontmatter.type === "work")
    .map(edge => <Excerpt post={edge.node}/>);

  const Writing = edges
    .filter(edge => edge.node.frontmatter.type === "writing")
    .map(edge => <Excerpt className="col-3" post={edge.node}/>);

  return (
    <div className="home">
      <div className="hero">
        <Background/>
        <div className="main-container">
          <div className="col-6">
            <h1 className="large">Corey Robinson</h1>
            <h3>UI Developer</h3>
          </div>
        </div>
      </div>
      <div className="work section">
        <div className="main-container">
          <div className="col-2">
            <h2>Projects</h2>
            <div className="header-decoration"><div className="deco"/></div>
          </div>
          <div className="col-4">
            {Work}
          </div>
        </div>
      </div>
      <div className="writing section">
        <div className="main-container">
          <div className="col-6">
            <h2>Writing</h2>
            <div className="header-decoration"><div className="deco"/></div>
          </div>
          {Writing}
        </div>
      </div>
    </div>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            type
          }
        }
      }
    }
  }
`;
