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
        <Text>Track your habits and get motivated by streaks with these simple steps:</Text>
        <Text>1. Create account</Text>
        <Text>2. Pick your habits</Text>
        <Text>3. Mark as done and get motivated by streaks!</Text>
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
`
const Text = styled.h2`
  font-size: 25px;
  align-self: flex-start;
`
const TextSection = styled.div`
  display: flex;  
  color: #48c9b0;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`