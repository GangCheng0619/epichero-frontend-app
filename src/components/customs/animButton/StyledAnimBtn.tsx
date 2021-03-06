import styled from 'styled-components'

export const ROICalcBtnDiv = styled.a`
display: flex;
    img {
        margin-right: 10px;
    }
    position: relative;
    text-align: center;
    font-family: Tahoma,Arial;
    font-size: 16px;
    line-height: 1.8;
    background-color: #ea8f08;
    border-radius: 8px;
    padding: 7px 16px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
    transition: 0.2s linear;
    z-index:2;
    :hover {
        background: #ea8f08dd;
        transition: 0.2s linear;
        cursor: pointer;
    }
    transition: transform .3s cubic-bezier(.25,.8,.5,1);
    :before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: inherit;
        box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
        border-bottom: 3px solid rgba(0,0,0,.15);
    }
    :active {
        :before {
            border-bottom: none;
        }
        transform: translateY(3px);
        cursor: pointer;
    }
}
`
