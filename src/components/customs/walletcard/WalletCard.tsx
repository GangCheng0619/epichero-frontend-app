import React from 'react'
import AnimBtn from '../animButton/AnimBtn'
import {
  WalletCardDiv,
  WalletCard,
  WalletBtn,
} from '../../pages/connectwallet/StyledConnectWallet'

const WalletCardPart = () => {
  return (
    <WalletCardDiv>
      <WalletCard>
        <div className="card-wrap">
          <div className="card-int">
            <video
              src="https://storage.googleapis.com/epic-cdn/public/hero/chest.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="video"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/epic-cdn/public/hero/chest.webp')",
              }}
            >
              <track src="" kind="captions" label="spanish_captions" />
            </video>
          </div>
          <div className="card-right" />
          <div className="card-left" />
          <div className="card-title">
            <div className="title-text">
              <div>1 Hero</div>
              <div>
                650 EPICHERO
                <img
                  src="https://storage.googleapis.com/thoreum-cdn/public/pools/epichero.png"
                  alt="coin"
                  className="coin-img"
                />
              </div>
            </div>
          </div>
        </div>
      </WalletCard>
      <WalletBtn>
        <AnimBtn label="CONNECT WALLET" />
      </WalletBtn>
    </WalletCardDiv>
  )
}

export default WalletCardPart
