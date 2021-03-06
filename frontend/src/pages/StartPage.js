import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/Rainbow-Vortex.svg'
import { useSelector } from 'react-redux'


export const StartPage = () => {
  const token = useSelector((state) => state.userProfile.user.accessToken)

  return (
    <Startpage>
      <Title>Track your habits</Title>
      <Text>Habits grow stronger and stronger over time and become more and more automatic. So make sure you have the right ones!</Text>
      {!token && <StyledLink to="/login">Log in</StyledLink>}
      {token && <StyledLink to="/profile">To Dashboard</StyledLink>}
    </Startpage>
  )
}

const Startpage = styled.section`
  margin: 0;
  display: flex;
  width: 100%;
  background-image: url(${img}); 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 700px;
  padding-top: 200px;

  @media (max-width: 400px) {
    padding-top: 50px;
  }  
`

const Title = styled.h1`
  font-size: 60px;
  color: #fff;
  margin: 0;
  text-shadow: #48c9b0 3px 3px 15px;
  padding: 20px;
  max-width: 500px;

  @media (max-width: 700px) {
    font-size: 60px;
  }
`
const Text = styled.h2`
  font-size: 20px;
  color: #fff;
  text-shadow: #48c9b0 3px 3px 15px;
  margin: 5px;
  padding: 0 20px;
  max-width: 600px;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`