import React from 'react'
import styled from 'styled-components'
import { ItemText } from '../components/ItemStyle'

export const MonthlyStats = () => {
  return (
    <Container>
      <ItemText style={{ color: "white", fontSize: "23px" }}>Last 30 days:</ItemText>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #48c9b0;
  width: 300px;
  height: 400px;
  border-radius: 8px;
  margin: 9px;
  padding: 8px 8px 8px 20px;
`