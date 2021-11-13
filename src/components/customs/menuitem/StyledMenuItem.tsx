import styled from "styled-components";

type MenuActiveProps = {
    f?: boolean;
}

export const MenuItemDiv = styled.div<MenuActiveProps>`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid #424242;
    img {
        width: 64px;
        border-radius: 50%;
    }
    color: #ff9800;
    font-size: 1.25rem;
    font-weight: 700;
    padding: 4px;
    line-height: 2rem;
    transition: 0.2s linear;
    letter-spacing: .0125em;
    :hover {
        background:${({f}) => f ? "#ff9800" :"#ffffff" }15;
        transition: 0.2s linear;
    }
    color:${({f}) => f ? "#ff9800;" : "#ffffff;"}
    cursor: pointer;
`