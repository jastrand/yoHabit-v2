import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userProfile } from '../reducers/userinfo'
import { personalHabits } from '../reducers/personalHabits'
import { ItemBox, ItemText, ItemButton } from '../components/ItemStyle'


export const UserDashboard = (props) => {
  const id = useSelector((state) => state.userProfile.user.id)
  const dispatch = useDispatch()
  const [dashboard, setDashboard] = useState()

  const handleOnClick = () => {
    setDashboard()
    props.function(false)
    fetch(`http://localhost:8080/users/${id}`, {
      method: 'POST',
      body: JSON.stringify({ personalHabits: personalHabits }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then((data) => {
        dispatch(userProfile.actions.setProfile({ personalHabits: data.personalHabits }))
      })
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
  )
}