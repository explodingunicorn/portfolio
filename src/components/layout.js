import React from 'react'
import { css } from 'emotion'

const rowClass = css({
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: '100%',
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginBottom: '20px',
  width: '100%',
})

const Row = props => {
  return (
    <div className={`${rowClass} ${props.className}`}>{props.children}</div>
  )
}

const Column = props => {
  const getWidth = number => {
    return `${number / 12 * 100}%`
  }

  const columnClass = css({
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '15px',
    width: `${getWidth(props.large)}`,

    '@media (max-width: 1224px)': {
      width: props.medium
        ? `${getWidth(props.medium)}`
        : `${getWidth(props.large)}`,
    },

    '@media (max-width: 768px)': {
      width: props.small
        ? `${getWidth(props.small)}`
        : props.medium
          ? `${getWidth(props.medium)}`
          : `${getWidth(props.large)}`,
    },
  })

  return (
    <div className={`${columnClass} ${props.className}`}>{props.children}</div>
  )
}

const Container = props => {
  const containerClass = css({
    display: 'block',
    margin: '0 auto',
    width: `${props.large}%`,

    '@media (max-width: 1224px)': {
      width: props.medium ? `${props.medium}%` : `${props.large}%`,
    },

    '@media (max-width: 768px)': {
      width: props.small
        ? `${props.small}%`
        : props.medium ? `${props.medium}%` : `${props.large}%`,
    },
  })

  return (
    <div className={`${containerClass} ${props.className}`}>
      {props.children}
    </div>
  )
}

export { Container, Row, Column }
