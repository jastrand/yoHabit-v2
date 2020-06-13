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
  TextWrapper
} from '../components/ItemStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { MonthlyStats } from '../components/MonthlyStats'
import moment from 'moment';

export const Dashboard = () => {
  const dispatch = useDispatch()
  const habits = useSelector((store) => store.personalHabits.list.items)
  const [open, setOpen] = useState(false)
  const noItems = habits.length <= 0
  const dateStamp = moment().format('LL')
  const todaysDate = moment().format('LL')

  const handleOnClick = (habit) => {
    habits.timeStamp = dateStamp
    dispatch(personalHabits.actions.doneToday(habit));
  }

  return (
    <div>
      {!noItems ? (
        <div>
          <ItemText color="tomato" fontSize="25px">Your streak:</ItemText>
          {habits.map((habit) => (
            <div key={habit.id}>
              <DashboardView>
                <ItemBox color="#5dade2" >
                  <TextWrapper>
                    <ItemText color="black" fontSize="20px">{habit.title}</ItemText>
                    <ItemText color="white">{`${habit.category === 'weekly' ? "This week: " : "This month: "}`}
                      {habit.quantity} times</ItemText>
                  </TextWrapper>
                  <IconWrapper onClick={() => setOpen(prev => !prev)}>
                    <FontAwesomeIcon color="white" icon={faAngleDoubleDown} />
                  </IconWrapper>
                </ItemBox>
                <ItemBox color="whitesmoke" width="40px">
                  <AddButton
                    onClick={() => handleOnClick(habit)}
                    disabled={todaysDate === habit.dateStamp}
                  ><FontAwesomeIcon color="#48c9b0" icon={faCheckCircle} /></AddButton>
                </ItemBox>
              </DashboardView>
              {open && <MonthlyStats />}
            </div>
          ))}
        </div>
      ) : (
          <Text>Go to "<TextLink to="/settings">Your Settings</TextLink>" to pick your habits!</Text>
        )
      }
    </div >
  )
}

