import React from 'react'
import styled from 'styled-components'

export const RandomMotivation = () => {

  const quotes = [
    "Your limitation—it's only your imagination",
    "Push yourself, because no one else is going to do it for you",
    "Sometimes later becomes never...",
    "You can totally do this.",
    "Great things never come from comfort zones.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Do something today that your future self will thank you for."
  ]

  const randomSelector = array => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const dailyQuote = randomSelector(quotes)


  return (
    <Motivation>
      {dailyQuote}
    </Motivation>
  )
}

const Motivation = styled.p`
  margin: 20px;
  text-align: center;
`