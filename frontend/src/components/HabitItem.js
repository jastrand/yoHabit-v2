import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { personalHabits } from '../reducers/personalHabits'
import { ItemBox, ItemText, ItemButton, Category, ItemWrapper } from '../components/ItemStyle'

export const HabitItem = ({ habit }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('weekly')
  const habits = useSelector((state) => state.personalHabits.list.items)
  const existingHabit = habits.find(item => item.id === habit.id)

  const handleOnClick = () => {
    if (!existingHabit) {
      dispatch(personalHabits.actions.addItem({ ...habit, category }))
    } else {
      dispatch(personalHabits.actions.removeItem({
        habit: habit
      }));
    }
  }

  return (
    <ItemBox color="#85C1E9" padding="15px">
      <ItemWrapper>
        <ItemText>{habit.title}</ItemText>
        <Category
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
        </Category>
      </ItemWrapper>
      <ItemButton color={!existingHabit ? "#2980B9" : "tomato"} type="button" onClick={handleOnClick}>
        {!existingHabit ? "+" : "-"}
      </ItemButton>
    </ItemBox>
  );
};