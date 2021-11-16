import React from 'react'
import Emojis from 'components/customs/emojis/Emojis'
import { MysteriousDiv, MySteriousLineDiv } from './StyledMysterious'
import { Text } from '../../customs/text'

const Mysterious = () => {
  return (
    <MysteriousDiv>
      <MySteriousLineDiv>
        <Text fWeight={700} fSize={24} lHeight={32} tSpacing={0}>
          <Emojis symbol="❓" label="question" />
          What&apos;s there inside Epic Hero Mysterious Chests
        </Text>
      </MySteriousLineDiv>
      <MySteriousLineDiv>
        <Text fWeight={700} fSize={16} lHeight={24}>
          <Emojis symbol="⚔️" label="swords" />8 GENESIS HEROES: Zeus, Loki,
          Medusa, Poseidon, Monkey King, Athena, Cleopatra, Ne Zha.
        </Text>
      </MySteriousLineDiv>
      <MySteriousLineDiv>
        <Text fWeight={700} fSize={24} lHeight={32} tSpacing={0}>
          <Emojis symbol="🎁" label="giftbox" />
          Benefit of buying Genesis Heroes:
        </Text>
      </MySteriousLineDiv>
      <MySteriousLineDiv>
        <Text fWeight={700} fSize={16} lHeight={24} tSpacing={0.5}>
          1. Only genesis heroes can give birth to a baby hero. Every 2 genesis
          heroes, one male and one female, can give birth to new hero. After
          giving birth there&apos;s a cool down period and the 2 heroes will be
          aged until cannot giving birth anymore.
        </Text>
      </MySteriousLineDiv>
      <MySteriousLineDiv>
        <Text fWeight={700} fSize={16} lHeight={24} tSpacing={0.5}>
          2. Holders of Genesis heroes NFTs will receive BNB reflection rewards
          right after token launch on 15h UTC Sept. 17th 2021. Each buy&sell
          transactions of EPICHERO token will have a 5% tax converted to WBNB
          and distribute to our NFT holders.
        </Text>
      </MySteriousLineDiv>
      <MySteriousLineDiv>
        <Text fWeight={700} fSize={24} lHeight={32} tSpacing={0}>
          <Emojis symbol="👑" label="crown" />
          Each chest contains a random Hero with the rarity level ranging from
          Common to Epic:
        </Text>
      </MySteriousLineDiv>
      <MySteriousLineDiv>
        <Text fWeight={700} fSize={16} lHeight={24} tSpacing={0.5}>
          Common: 52% | Uncommon: 26% | Rare: 13% | Super Rare: 6% | Legendary:
          2.5% | Mythical: 0.4% | Epic: 0.1%
        </Text>
      </MySteriousLineDiv>
    </MysteriousDiv>
  )
}

export default Mysterious
