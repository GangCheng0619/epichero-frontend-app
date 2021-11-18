import { Text } from 'components/customs/text'
import React from 'react'
import {
  SafeMoonGlobalDiv,
  SafeMoonDiv,
  SafeMoonsNFTSide,
  NationalsNFTSide,
  FilledContentDiv,
  BlankContentDiv,
  HeadingCursor,
  TextBlockDiv,
  Container,
  InvestingLink,
  CoinMarketCapLink,
  CoinMarketCapDiv,
  CoinMarket,
  YahooFinanceLink,
  NFTGameTitle,
  NationalTextItemDiv,
  NationalTextBlockDiv,
} from './StyledSafeMoonNft'

const SafeMoonNft = () => {
  return (
    <SafeMoonDiv>
      <SafeMoonGlobalDiv>
        <SafeMoonsNFTSide>
          <FilledContentDiv>
            <Container>
              <TextBlockDiv>
                <HeadingCursor>
                  <Text
                    mode="span"
                    fSize={24}
                    fWeight={400}
                    lHeight={32}
                    tSpacing={0}
                  >
                    Why EpicHero is the Safemoon of NFT and set to change the
                    whole GameFi space
                  </Text>
                </HeadingCursor>
              </TextBlockDiv>
              <TextBlockDiv>
                <Text
                  mode="span"
                  fSize={16}
                  fWeight={700}
                  lHeight={24}
                  tSpacing={0.5}
                >
                  &quot;As the world’s first NFT to give holders reflection
                  rewards in BNB, EpicHero is expected to be a true game
                  changer. You could say, EpicHero is the Safemoon of NFT.
                  EpicHero is the pioneer in this field and is committed to
                  bring more innovative ideas and applications to change the
                  whole GameFi space.&quot;
                </Text>
              </TextBlockDiv>
              <HeadingCursor>
                <InvestingLink />
              </HeadingCursor>
            </Container>
            <Container>
              <TextBlockDiv>
                <Text
                  mode="span"
                  fSize={16}
                  fWeight={700}
                  lHeight={24}
                  tSpacing={0.5}
                >
                  &quot;Currently, the token is priced at $0.4333 and the $1
                  mark seems quite possible for EPICHERO considering the extreme
                  hype created around it. If its growth pattern continues like
                  this, then $10 is a possible target for this NFT game
                  token.&quot;
                </Text>
              </TextBlockDiv>

              <CoinMarket>
                <CoinMarketCapDiv>
                  <CoinMarketCapLink />
                </CoinMarketCapDiv>
              </CoinMarket>
            </Container>
            <Container>
              <TextBlockDiv>
                <Text
                  mode="span"
                  fSize={16}
                  fWeight={700}
                  lHeight={24}
                  tSpacing={0.5}
                >
                  &quot;EpicHero is the First Ever play to earn game that
                  rewards its NFT holders with 5% BNB of token transaction and
                  NFT marketplace transaction tax. This innovative mechanism
                  gives the EpicHero NFT holder&apos;s great passive income
                  overtime simply by holding the NFT in their wallet. The
                  multiple use cases, from play2earn, collecting to simply
                  holding for passive income, makes EpicHero friendly to anyone,
                  and attractive in various states of the market&quot;
                </Text>
              </TextBlockDiv>
              <HeadingCursor>
                <YahooFinanceLink />
              </HeadingCursor>
            </Container>
          </FilledContentDiv>
          <BlankContentDiv />
        </SafeMoonsNFTSide>
        <NationalsNFTSide>
          <NFTGameTitle>
            <Text
              mode="span"
              fSize={34}
              fWeight={700}
              lHeight={40}
              tSpacing={0.5}
            >
              EpicHero - The Biggest 3D NFT Metaverse Game On BSC
            </Text>
          </NFTGameTitle>
          <NationalTextBlockDiv>
            <NationalTextItemDiv>
              <Text
                mode="span"
                fSize={24}
                fWeight={400}
                lHeight={32}
                tSpacing={0}
              >
                EpicHero is the biggest 3D NFT Metaverse Game on the Binance
                Smart Chain Network. Collect and build an unstoppable force of
                characters by choosing from your favorite heroes from Greek,
                Norse, China, Vietnam, Japan, Egypt, India and Roman Mythology.
                Users can summon, merge and evolve thousands of Collectable Epic
                Hero Battle Card NFTs and bring them to the largest arena to do
                battle against other Epic Heroes.
              </Text>
            </NationalTextItemDiv>
            <NationalTextItemDiv>
              <Text
                mode="span"
                fSize={24}
                fWeight={400}
                lHeight={32}
                tSpacing={0}
              >
                Moreover, EpicHero is the First Ever play to earn game that
                rewards its NFT holders with 5% BNB of token transaction and NFT
                marketplace transaction tax. This innovative mechanism gives the
                EpicHero NFT holder&apos;s great passive income overtime simply
                by holding the NFT in their wallet.
              </Text>
            </NationalTextItemDiv>
          </NationalTextBlockDiv>
        </NationalsNFTSide>
      </SafeMoonGlobalDiv>
    </SafeMoonDiv>
  )
}

export default SafeMoonNft
