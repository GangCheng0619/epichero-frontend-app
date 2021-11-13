import React from 'react'
import { MenuItemDiv } from './StyledMenuItem'

const MenuItem = ({data}: any) => {
    return (
        <MenuItemDiv f={data.active}>
            <img src={data.src} alt={data.src} />
            <div>{data.name}</div>
        </MenuItemDiv>
    )
}

export default MenuItem
