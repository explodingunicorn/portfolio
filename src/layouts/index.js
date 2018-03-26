import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';

import '../styles/global.scss';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="C.Robinson - UI"
      meta={[
        { name: 'description', content: 'Corey Robinson is a web developer specializing in front-end and UI development.' },
        { name: 'keywords', content: 'Front-end, engineering, developer, web developer, Corey Robinson, software, react, vue, angular, UX, Visual Design' },
      ]}
    />
    <Header />
    <div className="main-template-container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
