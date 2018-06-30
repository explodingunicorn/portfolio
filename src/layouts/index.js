import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'emotion'
import colors from '../styles/colors'
import 'index.css'

require('prismjs/themes/prism-tomorrow.css')

injectGlobal`
  body {
    font-family: 'IBM Plex Sans Condensed', sans-serif !important;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    color: $black;
  }

  h1 {
    font-size: 5em;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  h2 {
    font-weight: 600;
    font-size: 3.5em;
    font-style: italic;
    margin-bottom: .3em;
    text-shadow: 2px 2px ${colors.lightGray};
  }

  h3 {
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 2px;
  }

  p {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 18px;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="C.Robinson - UI"
      meta={[
        {
          name: 'description',
          content:
            'Corey Robinson is a web developer specializing in front-end and UI development.',
        },
        {
          name: 'keywords',
          content:
            'Front-end, engineering, developer, web developer, Corey Robinson, software, react, vue, angular, UX, Visual Design',
        },
      ]}
    />
    <div className="main-template-container">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
