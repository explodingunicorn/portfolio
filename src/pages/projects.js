import React, { Component } from 'react'
import Link from 'gatsby-link'
import Excerpt from '../components/excerpt'

const ProjectsPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Projects = edges
    .filter(edge => edge.node.frontmatter.type === 'work')
    .map(edge => <Excerpt className="col-3" post={edge.node} />)

  return (
    <div className="projects">
      <div className="hero">
        <div className="main-container">
          <div className="col-6">
            <h1 className="large">Projects</h1>
          </div>
        </div>
      </div>
      <div className="work section">
        <div className="main-container">{Projects}</div>
      </div>
    </div>
  )
}

export default ProjectsPage

export const projectsQuery = graphql`
  query ProjectsQuery {
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
`
