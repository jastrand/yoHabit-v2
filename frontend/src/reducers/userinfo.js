import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id: false,
    accessToken: false,
    loggedIn: false,
    profileImage: false,
    personalHabits: false
  }
}

export const userProfile = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {

    //reducer to set id and token with that recieved from backend
    loggedIn: (state, action) => {
      const { id, accessToken, loggedIn, profileImage, personalHabits } = action.payload
      state.user.id = id;
      state.user.accessToken = accessToken;
      state.user.loggedIn = loggedIn;
      state.user.profileImage = profileImage;
      state.user.personalHabits = personalHabits;
    },
    //reduer to set id and token to false when user logs out
    logOut: (state) => {
      state.user.id = false;
      state.user.accessToken = false;
      state.user.loggedIn = false
    },
    setProfile: (state, action) => {
      const { profileImage, personalHabits } = action.payload
      state.user.profileImage = profileImage
      state.user.personalHabits = personalHabits
    },

  }
})