import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react-web'
import animation from '../assets/empty.json'
import { TextLink, Text } from '../components/ItemStyle'


export const EmptyList = () => {
  return (
    <TextWrapper>
      <Lottie
        options={{
          animationData: animation,
        }}
        width='150px'
        height='150px'
        autoPlay
      />
      <Text color="#48c9b0">Are you ready? Go to "<TextLink color="#48c9b0" to="/settings">Your Settings</TextLink>" to set up your first habits!</Text>
    </TextWrapper>
  )
}

const TextWrapper = styled.section`
  height: 500px;
`


