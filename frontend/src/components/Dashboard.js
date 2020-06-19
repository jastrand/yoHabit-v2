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
        <div>
          <TitleSpan><ItemText color="tomato" fontSize="25px">Your streak:</ItemText></TitleSpan>
          {habits.map((habit, i) => {
            console.log(habit)
            const opened = open === i
            const timeStamp = habit.timeStamp[habit.timeStamp.length - 1]
            const disabled = timeStamp > startTime
            console.log(timeStamp)
            console.log(disabled)
            return (
              <div key={i}>
                <DashboardView>
                  <Container color="#5dade2" >
                    <TextWrapper>
                      <ItemText color="black" fontSize="20px">{habit.title}</ItemText>
                      <ItemText color="white">{`${habit.category === 'weekly' ? "This week: " : "This month: "}`}
                        {habit.timeStamp.length} times</ItemText>
                    </TextWrapper>
                    <IconWrapper onClick={() => setOpen(opened ? false : i)}>
                      <FontAwesomeIcon color="white" icon={faAngleDoubleDown} />
                    </IconWrapper>
                    <Background>
                      <Progressbar percent={habit.timeStamp.length * 10}>
                      </Progressbar>
                    </Background>
                  </Container>
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
        </div>
      ) : (
          <Text>Go to "<TextLink to="/settings">Your Settings</TextLink>" to pick your habits!</Text>
        )
      }
    </div>
  )
}



const Container = styled.div`
  height: 7px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  padding: 12px 8px 8px 12px;
  height: 50px;
`;

const Section = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

const Background = styled(Section)`
  background: #b0b0b0;
  width: 100%;
`;

const Progressbar = styled(Section)`
  background: #5dade2;
  width: ${({ percent }) => percent}%;
`

const TitleSpan = styled.span`
  text-align: center;
`
