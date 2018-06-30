import React from 'react'
import { Container } from './layout'

const SiteContainer = ({ children }) => {
  return (
    <Container large={60} medium={80} small={95}>
      {children}
    </Container>
  )
}

export default SiteContainer
