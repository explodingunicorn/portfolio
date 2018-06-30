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

const Row = ({ ...props }) => {
  return (
    <div className={`${rowClass} ${props.className}`}>{props.children}</div>
  )
}

const Column = ({ ...props }) => {
  const columnClass = css({
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '15px',
    width: `${props.large / 12 * 100}%`,
  })

  return (
    <div className={`${columnClass} ${props.className}`}>{props.children}</div>
  )
}

const Container = ({ ...props }) => {
  const containerClass = css({
    display: 'block',
    margin: '0 auto',
    width: `${props.width}%`,
  })

  return (
    <div className={`${containerClass} ${props.className}`}>
      {props.children}
    </div>
  )
}

export { Container, Row, Column }
