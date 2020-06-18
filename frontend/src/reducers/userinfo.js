import { createSlice } from '@reduxjs/toolkit'
import { personalHabits } from '../reducers/personalHabits'

const initialState = {
  user: {
    id: false,
    accessToken: false,
    loggedIn: false,
    profileImage: false,
    personalHabits: []
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
      const { id, profileImage, personalHabits } = action.payload
      state.user.profileImage = profileImage
      state.user.id = id
      state.user.personalHabits = personalHabits
    },

  }
})

export const fetchDashboard = ({ id, habit, accessToken, category }) => {
  console.log(id)
  console.log(personalHabits)
  const URL = `http://localhost:8080/users/${id}`
  console.log(URL)
  return (dispatch) => {
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ personalHabits: personalHabits }),
      headers: { 'Content-Type': 'application/json', 'Authorization': accessToken }
    })
      .then(res => res.json())
      .then((data) => {
        dispatch(personalHabits.actions.addItem({ ...habit, category }))
        dispatch(userProfile.actions.setProfile({ id, personalHabits }))

        console.log(habit)
      })
  }

}

