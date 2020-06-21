import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { personalHabits } from '../reducers/personalHabits'
import { fetchDashboard } from '../reducers/userinfo'
import { ItemBox, ItemText, ItemButton, Category, ItemWrapper } from '../components/ItemStyle'


// This component is for each individual habit, it prints the value on the settings page for habits and adds it to each users personal dashboard.

export const HabitItem = ({ habit }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const [category, setCategory] = useState('weekly')
  const id = useSelector((state) => state.userProfile.user.id)

  const handleOnClick = () => {
    if (!added) {
      dispatch(personalHabits.actions.addItem({ ...habit, category }))
      //dispatch(fetchDashboard({ habit, category, id }))
      console.log(fetchDashboard)
    } else {
      dispatch(personalHabits.actions.removeItem({
        habit: habit
      }));
    }
    setAdded(!added);
  }

  return (
    <ItemBox color="#85C1E9">
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
      <ItemButton color={!added ? "#2980B9" : "red"} type="button" onClick={handleOnClick}>
        {!added ? "Add" : "X"}
      </ItemButton>
    </ItemBox>
  );
};