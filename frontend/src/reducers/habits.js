import { createSlice } from '@reduxjs/toolkit'
import { personalHabits } from './personalHabits'

// This reducer is the generic daily habits
// User will have possibility to add its own (stretch goal)
const initialState = {
  name: "Habit data",
  habitData: [
    { id: 1, title: 'Walk 10k steps' },
    { id: 2, title: 'Drink 2L Water' },
    { id: 3, title: 'Sleep 8 hours' },
    { id: 4, title: 'Meditate' },
    { id: 5, title: 'Read a book' },
    { id: 6, title: 'Watch YouTube' },
    { id: 7, title: 'Eat a vegetarian meal' },
    { id: 8, title: 'Say something nice to a friend' },
    { id: 9, title: 'Take vitamins' },
    { id: 10, title: 'Work out' }
  ]
}

export const habits = createSlice({
  name: 'habits',
  initialState: initialState,
  reducers: {
    addNewItem: (state, action) => {
      const { habit } = action.payload
      state.habitData.push(habit)
    }
  }
})

// put the thunk here with accesstoken and habit
// export const fetchDashboard = () => {
//   return (dispatch) => {
//     fetch(`http://localhost:8080/users/${id}`, {
//       method: 'POST',
//       body: JSON.stringify({ personalHabits: personalHabits }),
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then(res => res.json())
//       .then((data) => {
//         dispatch(userProfile.actions.setProfile({ personalHabits: data.personalHabits }))
//       })
//   }
// }

