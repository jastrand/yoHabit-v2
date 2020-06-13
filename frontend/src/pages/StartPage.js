import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/header.jpeg'

export const StartPage = () => {
  return (
    <Startpage>
      <Title>Track your habits</Title>
      <Text>Habits grow stronger and stronger over time and become more and more automatic. So make sure you have the right ones!</Text>
      <StyledLink to="/login">Log in</StyledLink>
    </Startpage>
  )
}

const Startpage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: whitesmoke;
  height: 600px;
`

const Title = styled.h1`
  font-size: 60px;
  color: #48c9b0;
  margin: 0;
  max-width: 500px;

  @media (max-width: 700px) {
    font-size: 60px;
  }
`
const Text = styled.h2`
  font-size: 20px;
  color: #48c9b0;
  font-weight: lighter;
  margin: 5px;
  max-width: 600px;
`

const StyledLink = styled(Link)`
  color: #48c9b0;
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 15px;
`