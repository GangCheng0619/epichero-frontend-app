import React from 'react'
import PhaseCard from 'components/customs/phasecard/PhaseCard'
import RoadMapTitle from 'components/customs/roadmaptitle/RoadMapTitle';
import styled from 'styled-components'
import SlideShow from 'components/customs/slideshow/SlideShow';
import HeroStatsWallet from 'components/customs/herostatswallet/HeroStatsWallet';

const RoadMapPart = styled.div`
width: 100%;
`;

const PhaseCardPart = styled.div`
  box-sizing: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  width: 100%;
`;

export const ChestDiv = styled.div`
  width: 80%;
  margin: auto;
`

const Chest = () => {
  return <ChestDiv>
    <SlideShow />
    <HeroStatsWallet />
    <RoadMapPart>
      <RoadMapTitle/>
      <PhaseCardPart>
        <PhaseCard />
        <PhaseCard />
        <PhaseCard />
      </PhaseCardPart>
    </RoadMapPart>
  </ChestDiv>
}

export default Chest
