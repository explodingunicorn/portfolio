import React from 'react'
import { graphql } from 'gatsby'
import Excerpt from '../components/excerpt'

const WritingPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Writing = edges
    .filter(edge => edge.node.frontmatter.type === 'writing')
    .map(edge => <Excerpt className="col-3" post={edge.node} />)

  return (
    <div className="writing">
      <div className="hero">
        <div className="main-container">
          <div className="col-6">
            <h1 className="large">Writing</h1>
          </div>
        </div>
      </div>
      <div className="work section">
        <div className="main-container">{Writing}</div>
      </div>
    </div>
  )
}

export default WritingPage

export const writingQuery = graphql`
  query WritingQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "writing" } } }
    ) {
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
