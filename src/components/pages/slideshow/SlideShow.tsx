import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import AnimBtn from '../../customs/animButton/AnimBtn'
import { ROICalcPartDiv, SlideShowDiv } from './StyledSlideShow'

const SlideShow = () => {
  const handleDragStart = (e: any) => e.preventDefault()

  const items = [
    <img
      src="https://storage.googleapis.com/epic-cdn/public/banners/us/genesis-roi-w.webp"
      width="100%"
      onDragStart={handleDragStart}
      alt="genesis-roi-w"
    />,
    <img
      src="https://storage.googleapis.com/epic-cdn/public/banners/us/demi-roi-w.webp"
      width="100%"
      onDragStart={handleDragStart}
      alt="demi-roi-w"
    />,
    <img
      src="https://storage.googleapis.com/epic-cdn/public/banners/us/epic-meta-w.webp"
      width="100%"
      onDragStart={handleDragStart}
      alt="epic-meta-w"
    />,
  ]

  return (
    <SlideShowDiv>
      <AliceCarousel
        infinite
        autoPlay
        mouseTracking
        items={items}
        autoPlayInterval={1000}
        animationType="fadeout"
      />
      <ROICalcPartDiv>
        <AnimBtn label="EpicHero ROI Calculator" />
      </ROICalcPartDiv>
    </SlideShowDiv>
  )
}

export default SlideShow
