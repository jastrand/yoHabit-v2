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
        console.log(personalHabits)
      });
  };
};

// donetoday
export const doneToday = (timeStamp, habitId) => {
  const URL = `https://yohabit.herokuapp.com/users/habits/${habitId}`;
  return (dispatch, getState) => {
    const accessToken = getState().userProfile.user.accessToken
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ timeStamp }),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(userProfile.actions.setHabits({ personalHabits: data.personalHabits }));
        console.log(personalHabits)
      });
  };
};


//delete habit from backend
export const deleteHabit = (id) => {
  const URL = `http://localhost:8080/users/${id}`
  return (dispatch, getState) => {
    const accessToken = getState().user.accessToken
    fetch(URL, {
      method: 'DELETE',
      headers: { Authorization: accessToken }
    })
      .then(console.log('deleting habit'))
      .then((res) => {
        if (res.ok) {
          return res.json()
        } throw new Error('Could not delete the habit. Try again.')
      })
      .then((json) => {
        console.log(json)
        dispatch(fetchDashboard())
      })
  }
}
