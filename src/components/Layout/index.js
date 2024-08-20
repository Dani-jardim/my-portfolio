/* eslint-disable react/prop-types */
import * as React from "react"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
    <GlobalStyles/>
      <main>{children}</main>
    </S.LayoutWrapper>
  )
}

export default Layout
