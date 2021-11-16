import styled from 'styled-components'

export const HeroStatsWalletDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  margin-bottom: 48px;
`

export const EpicHeroDiv = styled.div`
  font-family: Tahoma, Arial;
  border-radius: 8px;
  background: #3e2721 !important;
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
  font-family: Tahoma, Arial;
  border-radius: 8px;
  background: #3e2721 !important;
  color: #fff;
  margin-left: 16px;
  padding: 8px 16px;
`

export const WalletRefferalDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const WalletRefferalEditItem = styled.input`
        width: calc(100% - 90px);
    height: 40px;
    color: white;
    border-radius: 8px;
    padding: 0 12px;
    display: flex;
    border: 1px solid hsla(0,0%,100%,.6);
    outline-color: initial;
    outline-style: none;
    outline-width: initial;
    background-color: #00000000;
    transition: .2s linear;
    :hover {
        transition: .5s linear;
        border-color: #fff;
    }
    :focus {
        transition: .2s linear;
        border: 2px solid #ea8f08;
    }
}
`

export const WalletRefferalCopnyBtn = styled.a`
    width: 80px;
    text-align: center;
    font-family: Tahoma,Arial;
    background-color: #ea8f08;
    border-radius: 8px;
    padding: 7px 16px;
    transition: 0.2s linear;
    :hover {
        background: #ea8f08dd;
        transition: 0.2s linear;
        cursor: pointer;
    }
    :active {
        :before {
            border-bottom: none;
        }
        cursor: pointer;
    }
}
`

export const WalletRefferalTextLine = styled.div`
  display: flex;
`
