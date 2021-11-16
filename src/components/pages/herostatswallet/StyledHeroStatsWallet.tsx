import styled from "styled-components";

export const HeroStatsWalletDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    margin-bottom: 48px;
`

export const EpicHeroDiv = styled.div`
    font-family: Tahoma,Arial;
    border-radius: 8px;
    background: #3e2721!important;
    color: #fff;
    padding: 8px 16px;
`

export const HeroStatsLine = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HeroStatsLineItem = styled.div`
    padding: 8px 0;
`
export const HeroStatsTitle = styled.div``

export const YourWalletDiv = styled.div`
    font-family: Tahoma,Arial;
    border-radius: 8px;
    background: #3e2721!important;
    color: #fff;
    margin-left: 16px;
    padding: 8px 16px;
`

export const WalletRefferalDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const WalletRefferalEditItem = styled.input`
    height: 40px;
    border-radius: 8px;
    padding: 0 12px;
    display: flex;
    border-color: hsla(0,0%,100%,.6);
    outline-color: initial;
    outline-style: none;
    outline-width: initial;
    background-color: #00000000;
    :hover {
        border-color: #fff;
    }
    :active {
        border-color: #ea8f08;
    }
}
`

export const WalletHeroBuyBtn = styled.a`
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

export const WalletThoreumBtn = styled.a`
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

export const WalletRefferalCopnyBtn = styled.a`
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

