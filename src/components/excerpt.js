import React from 'react'
import { css } from '@emotion/react'
import colors from '../styles/colors'
import Button from './button'

const excerptClass = css({
  border: `.5px solid ${colors.lightGray}`,
  marginBottom: '20px',
  padding: '20px',

  p: {
    marginBottom: '40px',
  },
})

const Excerpt = ({ post }) => {
  return (
    <div css={excerptClass}>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.excerpt}</p>
      <Button color="black" full link={post.frontmatter.path}>
        read about it
      </Button>
    </div>
  )
}

export default Excerpt
