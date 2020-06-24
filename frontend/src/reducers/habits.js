import { createSlice } from '@reduxjs/toolkit'
// This reducer is the generic daily habits
// User will have possibility to add its own (stretch goal)
const initialState = {
  name: "Habit data",
  habitData: [
    { id: 1, title: 'Walk 70k steps' },
    { id: 2, title: 'Create an app' },
    { id: 3, title: 'Running' },
    { id: 4, title: 'Meditate' },
    { id: 5, title: 'Read a book' },
    { id: 6, title: 'Hobby project' },
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


