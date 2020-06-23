import React from 'react'
import image1 from 'assets/about1.jpeg'
import image2 from 'assets/about2.jpeg'
import image3 from 'assets/about3.jpeg'
import styled from 'styled-components'

export const About = () => {
  return (
    <Container>
      <ImageSection>
        <Image src={image1} alt="Person walks in stairs" />
        <Image src={image2} alt="Girl on a bicycle" />
        <Image src={image3} alt="A plate of healthy food" />
      </ImageSection>
      <TextSection>
        <Text>Track habits and get motivated by streaks, make sure not to lose your streak! </Text>
        <Text>Ok cool, so how does it work?</Text>
        <Flex>
          <Wrap><Span>1</Span><Steps>Create account</Steps></Wrap>
          <Wrap><Span>2</Span><Steps>Pick your habits</Steps></Wrap>
          <Wrap><Span>3</Span><Steps>Track habits and get motivated by streaks!</Steps></Wrap></Flex>
      </TextSection>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`
const ImageSection = styled.section`
  display: flex;
  justify-content: center;
`
const Image = styled.img`
  width: 30%;
  max-height: 300px;
  margin: 5px;
  border: 2px solid #4cc9b1;
  filter: drop-shadow(8px 8px 10px gray)
`
const Span = styled.span`
  background-color: #48c9b0;
  padding: 20px;
  color: white;
  border-radius: 50%;
  max-width: 20px;
  max-height: 20px;
`

const Text = styled.h2`
  font-size: 28px;
  margin: 10px;
  font-weight: lighter;
`

const Steps = styled.p`
  font-size: 20px;
  margin: 10px;
`
const Wrap = styled.div`
  display: flex;
  margin: 10px;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: fit-content;
`

const TextSection = styled.div` 
  display: flex;
  flex-direction: column;
  color: #48c9b0;
  align-items: center;
  justify-content: center;
  padding: 20px;
`