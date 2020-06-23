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

  const unixDates = timeStamp.map((d) => moment(d).unix())
  console.log(unixDates)

  // stack is an array containing arrays, so i variable is needed to know what inner array we're currently working on. Each inner array will represent a sequence of dates. So in this example it should have 3 arrays.. so [ [2 juni], [15 juni, 16 juni], [20 juni, 22 juni, 23 juni, 24, juni] ] -- one array containing 3 inner arrays.
  const i = 0;
  const result = unixDates.reduce((accumulator, current) => {
    // cur is the current inner array we're working with
    const cur = accumulator[i]
    // is the last date we added to an inner array, if the current inner array is empty it will be 0
    const a = cur ? cur[cur.length - 1] : 0

    // 86400000 represents 24h, so if current date is larger than the last date added in the inner array then we should add 1 to i to create a new inner array (new sequence)
    if (current - a > 86400000) {
      i++
    }

    // if current inner array is undefined and hasn't been created yet, it will be done:
    if (!accumulator[i]) {
      accumulator[i] = []
    }

    // push current date into the correct sequence
    accumulator[i].push(current)

    return accumulator
  }, [])

  // map function will give you the lengths of inner arrays, so we will have one array with numbers like [1, 2, 4] and then we get the max (highest) number in this array
  const maxSequence = Math.max.apply(null, result.map(x => x.length))
  console.log(result)
  console.log(maxSequence)


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
