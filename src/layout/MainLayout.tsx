import React from 'react'
import styled from 'styled-components'
// @import component
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const StyledLayout = styled.div`
  display: flex;
  background: no-repeat;
  background-image: url(https://storage.googleapis.com/epic-cdn/public/v1/bg-battle1.webp);
  background-size: cover;
  background-attachment: fixed;
`

const ContentDiv = styled.div`
width: 100%;`

const MainLayout = ({ children }: any) => {
  return (
    <StyledLayout>
      <Sidebar />
      <ContentDiv>
        <Header />
        {children}
        <Footer />
      </ContentDiv>
    </StyledLayout>
  )
}

export default MainLayout
