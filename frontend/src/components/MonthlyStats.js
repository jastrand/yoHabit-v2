import React from 'react'
import styled from 'styled-components'
import { ItemText } from '../components/ItemStyle'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

export const MonthlyStats = ({ timeStamp }) => {

  // calender view is limited with following start/end:
  const startDate = new Date(2020, 0, 1)
  const endDate = new Date()

  // get an array of the last 7 days by name of the day
  const dates = [...Array(7)].map((_, i) => {
    const day = new Date()
    day.setDate(day.getDate() - i)
    return moment(day).format("dddd")
  })
  console.log(dates)

  // if name of day and timestamp matches, habit is completed


  return (
    <Section>
      <Container>
        <ItemText style={{ color: "white", fontSize: "23px" }}>Last 7 days:</ItemText>
        <DateWrapper>
          {dates.reverse().map((day, index) => (
            <Dates key={index}>{day}</Dates>
          ))}

          {timeStamp.map((time, index) => (
            <Dates key={index}>{moment.unix(time).format("dddd")}</Dates>
          ))}
        </DateWrapper>
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
const DateWrapper = styled.section`
  
`

const Dates = styled.p`
 
`