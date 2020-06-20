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
        <Text><Span>1</Span> Create account</Text>
        <Text><Span>2</Span> Pick your habits</Text>
        <Text><Span>3</Span> Track habits and get motivated by streaks!</Text>
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
  height: 30%;
`
const Span = styled.span`
  background-color: #48c9b0;
  padding: 12px;
  color: white;
  border-radius: 50%;
  margin: 2px 10px 10px 2px;
`

const Text = styled.h2`
  font-size: 20px;
  align-self: flex-start;
  margin: 20px 0;
  text-align: center;
`
const TextSection = styled.div`
  display: flex;  
  color: #48c9b0;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`