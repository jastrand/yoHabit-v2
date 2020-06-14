import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/header.jpeg'
import { useSelector } from 'react-redux'


export const StartPage = () => {
  const token = useSelector((state) => state.userProfile.user.accessToken)

  return (
    <Startpage>
      <Title>Track your habits</Title>
      <Text>Habits grow stronger and stronger over time and become more and more automatic. So make sure you have the right ones!</Text>
      {!token && <StyledLink to="/login">Log in</StyledLink>}
    </Startpage>
  )
}

const Startpage = styled.section`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: rgb(247,247,247);
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