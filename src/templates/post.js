import React from "react";
import './post.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="post-container">
      <div className="hero">
        <div className="main-container">
          <div className="col-6">
            <h1>{frontmatter.title}</h1>
          </div>
        </div>
      </div>
      <div className="post-content">
        <div className="main-container">
          <div className="col-2 date">
            <div className="deco"/>
            <p><b>{frontmatter.date}</b></p>
          </div>
          <div className="col-4">
            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;