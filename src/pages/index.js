import React, { Component } from 'react'
import { css } from 'emotion'
import colors from '../styles/colors'
import Link from 'gatsby-link'
import { Row, Column } from '../components/layout'
import SiteContainer from '../components/siteContainer'
import Button from '../components/button'
import Excerpt from '../components/excerpt'

const heroClass = css({
  backgroundColor: colors.black,
  padding: '100px 0 0 0',
  'h1, h2, h3': {
    color: colors.white,
  },
})

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Work = edges
    .filter(edge => edge.node.frontmatter.type === 'work')
    .map(edge => <Excerpt post={edge.node} />)

  const Writing = edges
    .filter(edge => edge.node.frontmatter.type === 'writing')
    .map(edge => <Excerpt post={edge.node} />)

  return (
    <div>
      <div className={heroClass}>
        <SiteContainer>
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
            </Column>
          </Row>
        </SiteContainer>
      </div>
      <SiteContainer>
        <Row>
          <Column large={12}>
            <p>
              Hey, I'm Corey Robinson and this is my website. I am a Software
              Developer for Optum Technology where I focus mostly on UI
              development and design. The sites a little barren right now as I
              currently have a few projects and posts in the works.
            </p>
          </Column>
          <Column large={6}>
            <Button color="black" full hyperLink="mailto:c7o7r7e7y@gmail.com">
              Contact Me
            </Button>
          </Column>
          <Column large={6}>
            <Button
              full
              hyperLink="https://drive.google.com/file/d/1aXP3FIEzrNDE0GSmGS13bB2pkC43gjfz/view?usp=sharing"
            >
              Read the Resume
            </Button>
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
      </SiteContainer>
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
