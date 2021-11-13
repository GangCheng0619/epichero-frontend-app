import React from 'react'
import PhaseCard from 'components/customs/phasecard/PhaseCard'
import RoadMapTitle from 'components/customs/roadmaptitle/RoadMapTitle';
import styled from 'styled-components'
import SlideShow from 'components/customs/slideshow/SlideShow';
import HeroStatsWallet from 'components/customs/herostatswallet/HeroStatsWallet';

const RoadMapPart = styled.div`
width: 100%;
padding-top: 50px;
`;

const PhaseCardPart = styled.div`
  box-sizing: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 50px;
  width: 100%;
`;

const Chest = () => {
  return <div>
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
  </div>
}

export default Chest
