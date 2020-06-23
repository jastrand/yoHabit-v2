import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HabitSettings } from '../components/HabitSettings'
import { BackIcon } from '../assets/BackIcon'
import { HabitInput } from '../components/HabitInput'


export const Settings = () => {
  return (
    <SettingsPage>
      <StyledLink style={{ color: "#48c9b0" }} to="/profile"><BackIcon />Back to Dashboard</StyledLink>
      <Text>Please select your habits</Text>
      <HabitSettings />
      <HabitInput />
    </SettingsPage >
  )
}

const Text = styled.h1`
  color: #48c9b0;
  margin: 10px;  
`

const SettingsPage = styled.section`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: whitesmoke;
`

const StyledLink = styled(Link)`
  margin-bottom: 10px; 
  margin-top: 30px; 
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;

  &: hover {
    text-decoration: underline;
  }
`
