import React from 'react'
import styled from 'styled-components'
import { ItemText } from '../components/ItemStyle'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

export const MonthlyStats = ({ timeStamp }) => {

  const startDate = new Date(2020, 0, 1)
  const endDate = new Date()
  console.log(timeStamp)
  return (
    <Section>
      <Container>
        <ItemText style={{ color: "white", fontSize: "23px" }}>Last 7 days:</ItemText>
        {timeStamp.map((time) => (
          <p key={time}>
            {time}
          </p>
        ))}
      </Container>
      <Container>
        <ItemText style={{ color: "white", fontSize: "23px" }}>Overview:</ItemText>
        <Calendar
          minDate={startDate}
          maxDate={endDate}
        />
      </Container>
    </Section>
  )
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #48c9b0;
    width: 300px;
    height: 400px;
    border-radius: 8px;
    padding: 8px 8px 8px 20px;
    margin-right: 10px;
`
const Section = styled.section`
    display: flex;
`