import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

export const MonthlyStats = ({ timeStamp, props }) => {

  // array of the last 30 days by name of month and day
  const dates = [...Array(30)].map((_, i) => {
    const day = new Date()
    day.setDate(day.getDate() - i)
    return moment(day).format("MMM D")
  })

  const habitDone = timeStamp.map((time) => {
    return moment.unix(time).format("MMM D")
  })
  console.log(habitDone)

  return (
    <DateWrapper>
      {dates.reverse().map((date, i) => (
        <Month color={habitDone.some((time) => time === date) ? '#57d68c' : '#ff6347'}
          key={i}>{date}
        </Month>
      ))}
    </DateWrapper>
  )
}

const DateWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`

const Month = styled.p`
  background-color: ${props => props.color};
  margin: 7px;
  width: 35px;
  text-align: center;
  padding: 3px;
  color: white;
  border-radius: 10px;
  font-family: 'Raleway',sans-serif;
  border: 1px solid white;
`
