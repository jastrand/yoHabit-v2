import React from 'react'
import styled from 'styled-components'
import img from '../assets/Linkedin.svg'
import img2 from '../assets/github.svg'

export const Contact = () => {
  return (
    <Container>
      <TextSection>
        <Text>This is a Technigo BootCamp Project by Johanna Åstrand 2020.</Text>
        <ContactWrapper>
          <a href="https://www.linkedin.com/in/johanna-%C3%A5strand/" target="blank"><Span><Image src={img} /></Span></a>
          <a href="https://github.com/jastrand" target="blank"><Span><Image src={img2} /></Span></a>
        </ContactWrapper>
      </TextSection>
    </Container>
  )
}



const Image = styled.img` 
  height: 30px;
`

const Span = styled.span` 
  background-color: #48c9b0;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  &:hover {
    transform: scale(1.1);
  }
`

const Container = styled.section`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`

const Text = styled.h2`
  font-size: 25px;
`
const TextSection = styled.div`
  display: flex;  
  color: #48c9b0;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const ContactWrapper = styled.div`
 display: flex;
`