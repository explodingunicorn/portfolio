import React from 'react'
import { css } from 'emotion'
import colors from '../styles/colors'
import Link from 'gatsby-link'

const Button = props => {
  const buttonClass = css({
    backgroundColor: props.color ? colors[props.color] : 'transparent',
    border: `1px solid ${colors.black}`,
    boxSizing: 'border-box',
    color: props.color === 'black' ? colors.white : colors.black,
    fontFamily: 'IBM Plex Mono',
    fontWeight: 400,
    padding: '15px',
    width: props.full ? '100%' : 'auto',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  })

  const button = (
    <button
      onClick={() => (props.onClick ? props.onClick() : null)}
      className={buttonClass}
    >
      {props.children} >>
    </button>
  )

  if (props.link) {
    return <Link to={props.link}>{button}</Link>
  } else if (props.hyperLink) {
    return (
      <a href={props.hyperLink} target="_blank">
        {button}
      </a>
    )
  }

  return button
}

export default Button
