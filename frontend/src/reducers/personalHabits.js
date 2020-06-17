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
      const timeStamp = moment().unix()
      const existingItem = state.list.items.find((item) => item.id === action.payload.id)
      if (!existingItem) {
        state.list.items.push({ ...action.payload, timeStamp: [] })
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
      const timeStamp = moment().unix();
      const existingItem = state.list.items.find((item) => item.id === action.payload.id)

      if (existingItem.timeStamp.length === 0) {
        existingItem.timeStamp.push(timeStamp)
        return
      }
      const startTime = moment().startOf('day').unix();
      const lastEntry = existingItem.timeStamp[existingItem.timeStamp.length - 1]
      console.log(lastEntry)
      console.log(startTime)
      console.log(existingItem)
      if (lastEntry < startTime) {
        console.log("tjaaa")
        existingItem.timeStamp.push(timeStamp)

      } else {
        return;
      }
    }
  }
})



