import React from 'react'
import styled from 'styled-components'
// @import component
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const StyledLayout = styled.div`
  display: flex;
  flex-
`

const MainLayout = ({ children }: any) => {
  return (
    <StyledLayout>
      <Sidebar />
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </StyledLayout>
  )
}

export default MainLayout
