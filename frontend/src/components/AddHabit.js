import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { personalHabits } from '../reducers/personalHabits'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { ItemBox, ItemText, AddButton } from '../components/ItemStyle'
import moment from 'moment';

export const AddHabit = () => {
  const dispatch = useDispatch()
  const habits = useSelector((store) => store.personalHabits.list.items)
  const dateStamp = moment().format('LL')
  const todaysDate = moment().format('LL')

  const handleOnClick = (habit) => {
    habit.timeStamp = dateStamp
    dispatch(personalHabits.actions.doneToday(habit));
  }

  return (
    <div>
      {habits.map((habit) => (
        <ItemBox color="tomato" key={habit.id}>
          <ItemText>{habit.title}</ItemText>
          <AddButton
            onClick={() => handleOnClick(habit)}
            disabled={todaysDate === habit.dateStamp}
          ><FontAwesomeIcon color="white" icon={faCheckCircle} /></AddButton>
        </ItemBox>
      ))}

    </div>
  )
}