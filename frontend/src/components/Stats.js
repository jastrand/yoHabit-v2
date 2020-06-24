import React from 'react'
import styled from 'styled-components'
import { ItemText } from './ItemStyle'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { MonthlyStats } from '../components/MonthlyStats'
import { HighestStreak } from '../components/HighestStreak'
import { RandomMotivation } from '../components/RandomMotivation'
import { StreakCount } from '../components/StreakCount'

export const Stats = ({ timeStamp, category }) => {

  // array of the last 7 days by name of the day
  const dates = [...Array(7)].map((_, i) => {
    const day = new Date()
    day.setDate(day.getDate() - i)
    return moment(day).format("dddd")
  })

  // array of which timeStamps each user have and return from unix to name of the day
  const getTimes = timeStamp.map((time) => {
    return moment.unix(time).format("dddd")
  })

  return (
    <div>
      <Section>
        <Container>
          <TitleSpan><ItemText style={{ color: "white", fontSize: "25px" }}>Last 7 days:</ItemText></TitleSpan>
          <DateWrapper>
            {dates.reverse().map((day, index) => (
              <Dates key={index}>{day}
                <Span>
                  {getTimes.some((time) => time === day) ?
                    <FontAwesomeIcon color="#58D68D" icon={faCheckSquare} />
                    :
                    <FontAwesomeIcon color="tomato" icon={faTimesCircle} />}
                </Span>
              </Dates>
            ))}
          </DateWrapper>
          <StreakCount timeStamp={timeStamp} category={category} getTimes={getTimes} />
        </Container>
        <Container>
          <TitleSpan><ItemText style={{ color: "white", fontSize: "23px" }}>Overview:</ItemText></TitleSpan>
          <MonthlyStats timeStamp={timeStamp} />
        </Container>
        <Container>
          <TitleSpan><ItemText style={{ color: "white", fontSize: "23px" }}>your best streak:</ItemText></TitleSpan>
          <HighestStreak timeStamp={timeStamp} />
        </Container>
      </Section>
      <RandomMotivation />
    </div>
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

    @media (max-width: 400px) {
      margin: 10px;
    }  
`
const Section = styled.section`
    display: flex;
    justify-content: center;

    @media (max-width: 400px) {
      flex-direction: column;
      align-items: center;
    }  
  
`
const DateWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Span = styled.span`
  margin-left: 10px;
`
const TitleSpan = styled.span`
  align-self: center;
`

const Dates = styled.p`
  color: whitesmoke;
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #d2e9e4;
  color: black;
  margin: 8px;
`