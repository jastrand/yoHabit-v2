import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { MyProfile } from './pages/MyProfile'
import { StartPage } from './pages/StartPage'
import { Settings } from './pages/Settings'
import { userProfile } from 'reducers/userinfo'
import { habits } from 'reducers/habits'
import { personalHabits } from 'reducers/personalHabits'
import { Navbar } from './components/Navbar'


const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const reducer = combineReducers({
  userProfile: userProfile.reducer,
  habits: habits.reducer,
  personalHabits: personalHabits.reducer
})

const persistedState = loadFromLocalStorage()

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => saveToLocalStorage(store.getState()))


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact ><StartPage /></Route>
          <Route path='/login' exact ><LogIn /></Route>
          <Route path='/register' exact ><SignUp /></Route>
          <Route path='/profile' exact ><MyProfile /></Route>
          <Route path='/settings' exact ><Settings /></Route>>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
