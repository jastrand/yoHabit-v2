import { createSlice } from '@reduxjs/toolkit'
import { personalHabits } from '../reducers/personalHabits'

const initialState = {
  user: {
    id: false,
    accessToken: false,
    loggedIn: false,
    imageUrl: false,
    personalHabits: []
  }
}

export const userProfile = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {

    //reducer to set id and token with that recieved from backend
    loggedIn: (state, action) => {
      const { id, accessToken, loggedIn, imageUrl, personalHabits } = action.payload
      state.user.id = id;
      state.user.accessToken = accessToken;
      state.user.loggedIn = loggedIn;
      state.user.imageUrl = imageUrl;
      state.user.personalHabits = personalHabits;
    },
    //reducer to set id and token to false when user logs out
    logOut: (state) => {
      state.user.id = false;
      state.user.accessToken = false;
      state.user.loggedIn = false
    },
    setProfile: (state, action) => {
      const { id, imageUrl } = action.payload
      state.user.id = id
      state.user.imageUrl = imageUrl
    },
    setHabits: (state, action) => {
      const { id, personalHabits } = action.payload
      state.user.id = id
      state.user.personalHabits = personalHabits
    },
  }
})

// Sends the habit from settings page to backend
export const fetchDashboard = ({ id, habit, accessToken, category }) => {
  const URL = `https://yohabit.herokuapp.com//users/${id}`;
  return (dispatch) => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ habit, category }),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(personalHabits.actions.addItem({ ...habit, category }));
        dispatch(userProfile.actions.setHabits({ personalHabits: data.personalHabits }));
      });
  };
};




