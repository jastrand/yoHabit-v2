import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { personalHabits } from '../reducers/personalHabits'
import {
  ItemBox,
  ItemText,
  IconWrapper,
  Text,
  TextLink,
  AddButton,
  DashboardView,
  TextWrapper,
  Tooltip
} from '../components/ItemStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { MonthlyStats } from '../components/MonthlyStats'
import moment from 'moment';

export const Dashboard = () => {
  const dispatch = useDispatch()
  const habits = useSelector((store) => store.personalHabits.list.items)
  const [open, setOpen] = useState(false)
  const noItems = habits.length <= 0
  const startTime = moment().startOf('day').unix();
  console.log(startTime)
  const handleOnClick = (habit) => {
    dispatch(personalHabits.actions.doneToday(habit));
  }

  return (
    <div>
      {!noItems ? (
        <Section>
          <ItemText color="tomato" fontSize="25px">Your streak:</ItemText>
          {habits.map((habit, i) => {
            console.log(habit)
            const opened = open === i
            const timeStamp = habit.timeStamp[habit.timeStamp.length - 1]
            const disabled = timeStamp > startTime
            console.log(timeStamp)
            console.log(disabled)
            return (
              <div key={habit.id}>
                <DashboardView>
                  <ItemBox color="#5dade2" >
                    <TextWrapper>
                      <ItemText color="black" fontSize="20px">{habit.title}</ItemText>
                      <ItemText color="white">{`${habit.category === 'weekly' ? "This week: " : "This month: "}`}
                        {habit.timeStamp.length} times</ItemText>
                    </TextWrapper>
                    <IconWrapper onClick={() => setOpen(opened ? false : i)}>
                      <FontAwesomeIcon color="white" icon={faAngleDoubleDown} />
                    </IconWrapper>
                  </ItemBox>
                  <ItemBox color="whitesmoke" width="40px">
                    <AddButton
                      onClick={() => handleOnClick(habit)}
                      disabled={disabled ? "disabled" : ""}>
                      <FontAwesomeIcon color={disabled ? "e4e9ed" : "#48c9b0"} icon={faCheckCircle} /></AddButton>
                    {disabled && <Tooltip>Already done today</Tooltip>}
                  </ItemBox>
                </DashboardView>
                {opened && <MonthlyStats timeStamp={habit.timeStamp} />}
              </div>
            )
          })}
        </Section>
      ) : (
          <Text>Go to "<TextLink to="/settings">Your Settings</TextLink>" to pick your habits!</Text>
        )
      }
    </div >
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
