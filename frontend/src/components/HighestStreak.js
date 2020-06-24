import React from 'react'
import styled from 'styled-components'

export const HighestStreak = ({ timeStamp }) => {

  console.log(timeStamp)
  // i variable is needed to know whick inner array currently working on. Each inner array will represent a sequence of dates. 

  // eslint-disable-next-line
  let i = 0;
  const result = timeStamp.reduce((accumulator, current) => {

    // current inner array
    const cur = accumulator[i]

    // last date in the inner array, if array is empty return 0
    const a = cur ? cur[cur.length - 1] : 0


    // 86400 represents 24h, so if current date is larger than the last date added in the inner array then add 1 to i to create a new inner array 

    if (current - a > 90000 && a !== 0) {
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

  // length of the array in the correct order, highest streak 
  const maxSequence = Math.max.apply(null, result.map(x => x.length))


  // If there is no streak, infinity is returned so deal with that
  const notInfinity = Number.isFinite(maxSequence)


  return (
    <StreakWrapper>
      <Streak>{notInfinity ? maxSequence : "Let's go!"}</Streak>
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
  font-size: 70px;
  color: white;
  text-shadow: 5px 2px #ff0000;
  margin-top: 0;
  text-shadow:
  0.05em 0 black,
  0 0.05em black,
  -0.05em 0 black,
  0 -0.05em black,
  -0.05em -0.05em black,
  -0.05em 0.05em black,
  0.05em -0.05em black,
  0.05em 0.05em black;
`