import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Container, Row, Column } from '../components/layout'
import Button from '../components/button'
import Excerpt from '../components/excerpt'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Work = edges
    .filter(edge => edge.node.frontmatter.type === 'work')
    .map(edge => <Excerpt post={edge.node} />)

  const Writing = edges
    .filter(edge => edge.node.frontmatter.type === 'writing')
    .map(edge => <Excerpt post={edge.node} />)

  return (
    <div style={{ paddingTop: '40px' }}>
      <Container width={55}>
        <Row>
          <Column large={12}>
            <h1
              style={{
                marginBottom: '5px',
              }}
            >
              Corey Robinson
            </h1>
            <h3>UI Developer</h3>
            <p>
              Hey, I'm Corey Robinson and this is my website. I am a Software
              Developer for Optum Technology where I focus mostly on UI
              development and design. The sites a little barren right now as I
              currently have a few projects and posts in the works.
            </p>
          </Column>
          <Column large={6}>
            <Button color="black" full>
              Contact Me
            </Button>
          </Column>
          <Column large={6}>
            <Button full>Read the Resume</Button>
          </Column>
        </Row>
        <Row>
          <Column large={12}>
            <h2>Projects</h2>
            {Work}
          </Column>
        </Row>
        <Row>
          <Column large={12}>
            <h2>Writing</h2>
            {Writing}
          </Column>
        </Row>
      </Container>
    </div>
  )
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
`
