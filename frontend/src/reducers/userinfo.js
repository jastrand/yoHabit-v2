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
    //reduer to set id and token to false when user logs out
    logOut: (state) => {
      state.user.id = false;
      state.user.accessToken = false;
      state.user.loggedIn = false
    },
    setProfile: (state, action) => {
      const { id, imageUrl, personalHabits } = action.payload
      state.user.id = id
      state.user.imageUrl = imageUrl
      state.user.personalHabits = personalHabits
    },

  }
})

export const fetchDashboard = ({ id, habit, accessToken, category }) => {
  const URL = `http://localhost:8080/users/${id}`;
  return (dispatch) => {
    fetch(URL, {
      method: "PUT",
      body: JSON.stringify({ habit, category }),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(personalHabits.actions.addItem({ ...habit, category }));
        dispatch(userProfile.actions.setProfile({ id, personalHabits }));
        console.log(personalHabits)
      });
  };
};

