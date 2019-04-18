/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "./header"
import MainMenu from "./mainMenu";

import styled, {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Open Sans', Sans-serif;
  }
`
const LayoutWrapper = styled.div`
max-width: 960px;
margin: 0 auto;
`

const Layout = ({ children }) => (
 <div>
   <GlobalStyles/>
   <MainMenu/>
   <LayoutWrapper>
      {children}
   </LayoutWrapper>
 </div>
)
export default Layout
