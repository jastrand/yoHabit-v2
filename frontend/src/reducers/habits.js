import { createSlice } from '@reduxjs/toolkit'

// This reducer is the generic daily habits
// User will have possibility to add its own (stretch goal)

const habitData = [
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

export const habits = createSlice({
  name: 'habits',
  initialState: habitData
})

