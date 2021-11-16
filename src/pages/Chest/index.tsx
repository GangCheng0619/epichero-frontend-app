import React from 'react'
import PhaseCard from 'components/pages/phasecard/PhaseCard'
import RoadMapTitle from 'components/pages/roadmaptitle/RoadMapTitle'
import styled from 'styled-components'
import SlideShow from 'components/pages/slideshow/SlideShow'
import HeroStatsWallet from 'components/pages/herostatswallet/HeroStatsWallet'
import ConnectWallet from 'components/pages/connectwallet/ConnectWallet'
// import Mysterious from 'components/pages/mysterious/Mysterious';

const RoadMapPart = styled.div`
  width: 100%;
`

const PhaseCardPart = styled.div`
  box-sizing: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  width: 100%;
`

export const ChestDiv = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
`

const Chest = () => {
  return (
    <ChestDiv>
      <SlideShow />
      <HeroStatsWallet />
      <ConnectWallet />
      {/* <Mysterious /> */}
      <RoadMapPart>
        <RoadMapTitle />
        <PhaseCardPart>
          <PhaseCard />
          <PhaseCard />
          <PhaseCard />
        </PhaseCardPart>
      </RoadMapPart>
    </ChestDiv>
  )
}

export default Chest
