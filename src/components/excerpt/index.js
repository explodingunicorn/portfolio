import React from 'react';
import Button from '../button';
import './excerpt.scss';

const Excerpt = ({post, className}) => {
  return (
    <div className={"excerpt " + className}>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.excerpt}</p>
      <Button type={post.frontmatter.type} link={post.frontmatter.path}>read about it</Button>
    </div>
  )
}

export default Excerpt;