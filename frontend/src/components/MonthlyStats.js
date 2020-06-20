import React from 'react'
import styled from 'styled-components'
import { ItemText } from '../components/ItemStyle'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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

  const getTimes = timeStamp.map((time) => {
    return moment.unix(time).format("dddd")
  })
  console.log(getTimes)

  //const tileClassName = dates.map((day) => day == getTimes ? "green" : "red")

  // const howManyTimes =
  //   getTimes.length === 0 ? "Time to get started!!" ||
  //     getTimes.length === 7 ? "Week completed"

  return (
    <Section>
      <Container>
        <TitleSpan><ItemText style={{ color: "white", fontSize: "25px" }}>Last 7 days:</ItemText></TitleSpan>
        <DateWrapper>
          {dates.reverse().map((day, index) => (
            <Dates key={index}>{day}
              <Span>
                {day === getTimes ?
                  <FontAwesomeIcon color="green" icon={faCheckSquare} />
                  :
                  <FontAwesomeIcon color="red" icon={faTimesCircle} />}
              </Span>
            </Dates>
          ))}
        </DateWrapper>
        <StreakCount>Way to go! {getTimes.length}/7 days completed!</StreakCount>
      </Container>
      <Container>
        <TitleSpan><ItemText style={{ color: "white", fontSize: "23px" }}>Overview:</ItemText></TitleSpan>
        <Calendar
          //tileClassName={tileClassName}
          minDate={startDate}
          maxDate={endDate}
        />
      </Container>
    </Section >
  )
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  justify-content: flex-start;
`
const Span = styled.span`
  margin-left: 10px;
`
const TitleSpan = styled.span`
  align-self: center;
`
const StreakCount = styled.p`
  font-size: 18px;
  align-self: center;
  color: white;
  margin-top: 0;
`

const Dates = styled.p`
  color: whitesmoke;
  font-size: 20px;
`