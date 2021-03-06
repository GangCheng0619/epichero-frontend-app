import AnimBtn from 'components/customs/animButton/AnimBtn'
import React from 'react'
import { Text } from '../../customs/text'
import {
  EpicHeroDiv,
  HeroStatsLine,
  HeroStatsLineItem,
  HeroStatsTitle,
  HeroStatsWalletDiv,
  WalletRefferalCopnyBtn,
  WalletRefferalDiv,
  WalletRefferalEditItem,
  WalletRefferalTextLine,
  YourWalletDiv,
} from './StyledHeroStatsWallet'

const HeroStatsWallet = () => {
  return (
    <HeroStatsWalletDiv>
      <EpicHeroDiv>
        <HeroStatsTitle>
          <Text mode="span" fSize={24} fWeight={700} lHeight={32} tSpacing={0}>
            EPICHERO Stats
          </Text>
        </HeroStatsTitle>
        <HeroStatsLine>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              THOREUM Rewarded
            </Text>
          </HeroStatsLineItem>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
              fColor="#ea8f08"
            >
              8,415,207{' '}
            </Text>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              ($135,164)
            </Text>
          </HeroStatsLineItem>
        </HeroStatsLine>
        <HeroStatsLine>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              WBNB Rewarded
            </Text>
          </HeroStatsLineItem>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
              fColor="#ea8f08"
            >
              1,346{' '}
            </Text>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              ($891,396)
            </Text>
          </HeroStatsLineItem>
        </HeroStatsLine>
        <HeroStatsLine>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              Total Genesis Hero Sold
            </Text>
          </HeroStatsLineItem>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
              fColor="#ea8f08"
            >
              18180/18500
            </Text>
          </HeroStatsLineItem>
        </HeroStatsLine>
        <HeroStatsLine>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              Total Genesis Hero Born
            </Text>
          </HeroStatsLineItem>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
              fColor="#ea8f08"
            >
              16,944
            </Text>
          </HeroStatsLineItem>
        </HeroStatsLine>
        <HeroStatsLine>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              Total Demi Hero Born
            </Text>
          </HeroStatsLineItem>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
              fColor="#ea8f08"
            >
              21,825
            </Text>
          </HeroStatsLineItem>
        </HeroStatsLine>
      </EpicHeroDiv>
      <YourWalletDiv>
        <HeroStatsTitle>
          <Text mode="span" fSize={24} fWeight={700} lHeight={32} tSpacing={0}>
            Your Wallet
          </Text>
        </HeroStatsTitle>
        <HeroStatsLine>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              EPICHERO{' '}
            </Text>
            <Text
              mode="span"
              fSize={24}
              fWeight={400}
              lHeight={32}
              tSpacing={0.2}
            >
              0{' '}
            </Text>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              ($0)
            </Text>
          </HeroStatsLineItem>
          <HeroStatsLineItem>
            <AnimBtn
              label={
                <>
                  <img
                    src="https://storage.googleapis.com/epic-cdn/public/v1/logo.webp"
                    width="34px"
                    height="34px"
                    alt="coin"
                  />
                  Buy
                </>
              }
            />
          </HeroStatsLineItem>
        </HeroStatsLine>
        <HeroStatsLine>
          <HeroStatsLineItem>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              THOREUM{' '}
            </Text>
            <Text
              mode="span"
              fSize={24}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              0{' '}
            </Text>
            <Text
              mode="span"
              fSize={20}
              fWeight={500}
              lHeight={32}
              tSpacing={0.2}
            >
              ($0)
            </Text>
          </HeroStatsLineItem>
          <HeroStatsLineItem>
            <AnimBtn
              label={
                <>
                  <img
                    src="https://storage.googleapis.com/epic-cdn/public/coins/THOREUM.webp"
                    width="34px"
                    height="34px"
                    alt="coin"
                  />
                  Buy
                </>
              }
            />
          </HeroStatsLineItem>
        </HeroStatsLine>
        <HeroStatsLine>
          <Text
            mode="span"
            fSize={24}
            fWeight={700}
            lHeight={32}
            tSpacing={0.2}
          >
            Referral
          </Text>
        </HeroStatsLine>
        <HeroStatsLine>
          <WalletRefferalDiv>
            <WalletRefferalEditItem />
            <WalletRefferalCopnyBtn>Copy</WalletRefferalCopnyBtn>
          </WalletRefferalDiv>
        </HeroStatsLine>
        <WalletRefferalTextLine>
          <Text fSize={16} fWeight={500} lHeight={1.8} tSpacing={0.2}>
            Refer friends to earn 2% their income
          </Text>
          <Text
            fSize={16}
            fWeight={500}
            lHeight={1.8}
            tSpacing={0.2}
            fColor="#ea8f08"
          >
            View referrals report
          </Text>
        </WalletRefferalTextLine>
      </YourWalletDiv>
    </HeroStatsWalletDiv>
  )
}

export default HeroStatsWallet
