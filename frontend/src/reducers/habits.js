import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { personalHabits } from './personalHabits'
import { userProfile } from './userinfo'
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
    { id: 8, title: 'Make someone smile' },
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


