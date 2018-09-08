import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import colors from '../styles/colors'
import Button from '../components/button'
import { Row, Column } from '../components/layout'
import SiteContainer from '../components/siteContainer'

const heroClass = css({
  backgroundColor: colors.black,
  color: colors.white,
  padding: '20px 0 0 10px',
  h1: {
    marginBottom: '0px',
  },
  a: {
    marginBottom: '110px',
  },
})

const postClass = css({
  p: {
    margin: '0 0 30px 0',
  },
})

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className={postClass}>
      <div className={heroClass}>
        <SiteContainer>
          <Row>
            <Column large={12}>
              <Link
                to="/"
                style={{
                  color: colors.white,
                  display: 'block',
                  fontSize: '24px',
                }}
              >
                &lt;&lt; Back Home
              </Link>
              <h1>{frontmatter.title}</h1>
            </Column>
          </Row>
        </SiteContainer>
      </div>
      <SiteContainer>
        <Row>
          <Column large={4} small={12}>
            <p style={{ marginTop: '0' }}>
              <b>{frontmatter.date}</b>
              {frontmatter.updated ? (
                <b>UPDATED: {frontmatter.updated}</b>
              ) : null}
            </p>
            {frontmatter.projectLink ? (
              <Button color="purple" full hyperLink={frontmatter.projectLink}>
                Try out the app
              </Button>
            ) : null}
            {frontmatter.github ? (
              <Button color="black" full hyperLink={frontmatter.github}>
                Check it out on Github
              </Button>
            ) : null}
            <Button full hyperLink="mailto:c7o7r7e7y@gmail.com">
              Contact Me
            </Button>
          </Column>
          <Column large={8} small={12}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Column>
        </Row>
      </SiteContainer>
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
