import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

export const HighestStreak = ({ timeStamp }) => {

  const unixDates = timeStamp.map((d) => moment(d).unix())

  // stack is an array containing arrays, so i variable is needed to know what inner array we're currently working on. Each inner array will represent a sequence of dates. So in this example it should have 3 arrays.. so [ [2 juni], [15 juni, 16 juni], [20 juni, 22 juni, 23 juni, 24, juni] ] -- one array containing 3 inner arrays.
  // eslint-disable-next-line
  const i = 0;
  const result = unixDates.reduce((accumulator, current) => {

    // cur is the current inner array 
    const cur = accumulator[i]
    // is the last date added to an inner array, if the current inner array is empty it will be 0
    const a = cur ? cur[cur.length - 1] : 0

    // 86400000 represents 24h, so if current date is larger than the last date added in the inner array then we should add 1 to i to create a new inner array (new sequence)
    if (current - a > 86400000) {
      // eslint-disable-next-line
      i++
    }
    // if current inner array is undefined and hasn't been created yet, it will be done:

    if (!accumulator[i]) {
      accumulator[i] = []
    }

    // push current date into the correct sequence
    // eslint-disable-next-line
    accumulator[i].push(current)

    return accumulator
  }, [])

  // map function will give you the lengths of inner arrays, so we will have one array with numbers like [1, 2, 4] and then we get the max (highest) number in this array
  const maxSequence = Math.max.apply(null, result.map(x => x.length))

  return (
    <StreakWrapper>
      <Streak>{maxSequence}</Streak>
    </StreakWrapper>
  )
}

const StreakWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const Streak = styled.p`
  font-size: 60px;
  color: white;
  text-shadow: 2px 2px #ff0000;
  margin-top: 0;
`