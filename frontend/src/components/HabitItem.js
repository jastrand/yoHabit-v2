import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { personalHabits } from '../reducers/personalHabits'
import { ItemBox, ItemText, ItemButton } from '../components/ItemStyle'

// This component is for each individual habit, it prints the value on the settings page for habits and adds it to each users personal dashboard.

export const HabitItem = ({ habit }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const [category, setCategory] = useState('daily')

  const handleOnClick = () => {
    if (!added) {
      habit.category = category
      dispatch(personalHabits.actions.addItem(habit));
    } else {
      dispatch(personalHabits.actions.removeItem({
        habit: habit
      }));
    }
    setAdded(!added);
  }

  return (
    <ItemBox color="#85C1E9">
      <ItemText>{habit.title}</ItemText>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value='daily'>Daily</option>
        <option value='weekly'>Weekly</option>
        <option value='monthly'>Monthly</option>
      </select>
      <ItemButton color={!added ? "#2980B9" : "red"} type="button" onClick={handleOnClick}>
        {!added ? "Add" : "X"}
      </ItemButton>
    </ItemBox>
  );
};