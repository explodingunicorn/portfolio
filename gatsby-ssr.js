import React from 'react'
import Layout from './src/layouts'
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
