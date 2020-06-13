import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

const initialState = {
  list: {
    name: "Personal Habits",
    items: []
  }
}

export const personalHabits = createSlice({
  name: 'Personal Habits',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const timeStamp = moment().format('lll');
      const existingItem = state.list.items.find((item) => item.id === action.payload.id)
      if (!existingItem) {
        state.list.items.push({ ...action.payload, quantity: 0, timeStamp: timeStamp })
      } else {
        return
      }
    },

    // function not working fix later
    removeItem: (state, action) => {
      const { habit } = action.payload
      state.list.items = state.list.items.filter((item, index) => item.id !== habit.id)
    },
    doneToday: (state, action) => {
      const timeStamp = moment().format('lll');
      const startTime = moment().startOf('day').fromNow();
      const existingItem = state.list.items.find((item) => item.id === action.payload.id)

      if (timeStamp > startTime) {
        existingItem.quantity += 1

      } else {
        return;
      }
    }
  }
})

