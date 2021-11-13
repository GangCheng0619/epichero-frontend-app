import PhaseCard from 'components/customs/phasecard/PhaseCard'
import RoadMapTitle from 'components/customs/roadmaptitle/RoadMapTitle';
import React from 'react'
import styled from 'styled-components'

const RoadMapPart = styled.div`
box-sizing: inherit;
display: grid;
grid-gap: 16px;
padding: 50px;
width: 100%;
`;

const PhaseCardPart = styled.div`
box-sizing: inherit;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 16px;
padding: 50px;
width: 100%;
`

const Chest = () => {
  return <div>
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
