import styled from 'styled-components'

export const ConnectWalletDiv = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-bottom: 48px;
`

export const WalletCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
`

export const WalletCard = styled.div`
  justify-content: center;
  .card-wrap {
    position: relative;
    padding: 20px;
    border-radius: 20px 20px;
    height: 480px;
    max-width: 380px;

    .card-int {
      width: 100%;
      height: 100%;
      background-blend-mode: overlay;
      position: relative;
      .video {
        position: absolute;
        z-index: 0;
        object-fit: cover;
        object-position: center;
        background-size: cover;
        background-position: 50%;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
    .card-right {
      background-image: url(https://storage.googleapis.com/epic-cdn/public/card/card-chest2.webp);
      position: absolute;
      top: 0;
      background-repeat: no-repeat;
      background-size: auto 480px;
      right: 0;
      width: calc(100% - 40px);
      height: 480px;
      max-width: 380px;
      background-position: right;
    }
    .card-left {
      background-image: url(https://storage.googleapis.com/epic-cdn/public/card/card-chest1.webp);
      left: 0;
      width: 100%;
      background-position: 0;
      position: absolute;
      top: 0;
      background-repeat: no-repeat;
      background-size: auto 480px;
      height: 480px;
      max-width: 380px;
    }
    .card-title {
      position: absolute;
      color: #fff;
      bottom: 21px;
      left: 31px;
      right: 34px;
      padding: 5px 10px;
      background: linear-gradient(rgba(30, 1, 1, 0.1), rgba(30, 1, 1, 0.59));
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      .title-text {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 2rem;
        letter-spacing: 0.0125em;
        pointer-events: none !important;
      }
      .coin-img {
        margin-bottom: 4px;
        line-height: 1;
        width: 1em;
        height: 1em;
        letter-spacing: normal;
        text-transform: none;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        text-align: center;
        position: relative;
        box-sizing: initial;
        fill: currentColor;
        user-select: none;
        cursor: inherit;
        font-size: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        margin-left: 10px;
      }
    }
  }
`

export const WalletBtn = styled.div`
  align-self: center;
`
