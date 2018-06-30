import React from 'react'
import { css } from 'emotion'
import colors from '../styles/colors'
import Button from '../components/button'
import { Container, Row, Column } from '../components/layout'

const heroClass = css({
  backgroundColor: colors.black,
  color: colors.white,
  padding: '90px 0 0 20px',
  h1: {
    marginBottom: '10px',
  },
})

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter)
  return (
    <div>
      <div className={heroClass}>
        <Container width={55}>
          <Row>
            <h1>{frontmatter.title}</h1>
          </Row>
        </Container>
      </div>
      <Container width={55}>
        <Row>
          <Column large={8}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Column>
          <Column large={4}>
            <p style={{ margin: '0' }}>
              <b>{frontmatter.date}</b>
            </p>
            {frontmatter.github ? (
              <Button full hyperLink={frontmatter.github}>
                Check it out on Github
              </Button>
            ) : null}
          </Column>
        </Row>
      </Container>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        github
      }
    }
  }
`
