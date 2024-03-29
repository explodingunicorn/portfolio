import React from 'react'
import Layout from './src/layouts'
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
