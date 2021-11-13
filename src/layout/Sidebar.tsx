import React from 'react'
import styled from 'styled-components'
import { sidebar } from '../constant/list'

const StyledSidebar = styled.div`
  width: 250px;
  transform: translateX(0 px);
  background: rgba(1, 6, 44, 0.7);
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      {sidebar.map((item, key) => {
        return (
          <div key={key + 1}>
            <img src={item.src} alt="Sidebar" />
            <div>{item.name}</div>
          </div>
        )
      })}
    </StyledSidebar>
  )
}

export default Sidebar
