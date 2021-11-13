import MenuItem from 'components/customs/menuitem/MenuItem'
import React from 'react'
import styled from 'styled-components'
import { sidebar } from '../constant/list'

const StyledSidebar = styled.div`
  width: 250px;
  transform: translateX(0 px);
  background: #151839bb;
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      {sidebar.map((item:any) => {
        return (
          <MenuItem data={item} />
        )
      })}
    </StyledSidebar>
  )
}

export default Sidebar
