import * as React from "react"

import styled from "styled-components"
import GlobalStyles from "../../styles/global"

const LayoutWrapper = styled.section `
  display: flex;
  background: #16202c;
  min-height: 100vh;
  width:100%
`


const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
    <GlobalStyles/>
      <main>{children}</main>
    </LayoutWrapper>
  )
}

export default Layout
