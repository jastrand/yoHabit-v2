import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userProfile } from '../reducers/userinfo'
import { ImageForm } from '../components/ImageForm'
import { Dashboard } from '../components/Dashboard'

export const MyProfile = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [message, setMessage] = useState()
  const [showForm, setShowForm] = useState(false)
  const token = useSelector((state) => state.userProfile.user.accessToken)
  const image = useSelector((state) => state.userProfile.user.profileImage)
  const personalHabits = useSelector((state) => state.userProfile.user.personalHabits)
  useEffect(() => {
    fetch('http://localhost:8080/profile', {
      method: 'GET',
      headers: { 'Authorization': token, 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [token])

  const LogOut = () => {
    dispatch(userProfile.actions.logOut())
    history.push('/')
  }
  return (
    <Container>
      <ProfileWrapper>
        {token && <ImgWrapper>
          <ImgText onClick={() => setShowForm(!showForm)}>📷</ImgText>
          {!image && <Image src={require('../assets/default-profile.png')} alt="profile picture"></Image>}
          {image && <Image src={image} alt="profile picture"></Image>}
        </ImgWrapper>}
        {showForm && <ImageForm function={setShowForm} />}
        <WelcomeText>{message}</WelcomeText>
      </ProfileWrapper>
      {token &&
        <ProfileWrapper>
          <Dashboard />
          <Logout onClick={() => LogOut()}>Log out</Logout>
        </ProfileWrapper>}
    </Container>
  )
}

const WelcomeText = styled.p`
  font-size: 30px;
  color: #5DADE2;
  margin: 0 0 0 20px;
  padding: 0;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logout = styled.button`
  font-size: 15px;
  background-color: transparent;
  border-radius: 12px;
  margin: 10px 0 0 0;
  color: red;
  border-color: red;
  padding: 14px;

  &:hover {
    background: red;
    color: white;
    transform: scale(1.1);
    cursor: pointer;
  }
`
const ImgWrapper = styled.div`
  // position: relative;
  border-radius: 50%;
  border: 2px solid white;
  padding: 3px;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }

`
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  padding: 30px;
  margin: 10px;
`

const ImgText = styled.button`
  position: absolute;
  display: none;
  top: 10%;
  left: 20%;
  z-index: 5;
  color: white;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  font-weight: bold;

  ${ImgWrapper}:hover & {
    display: block;
  }
`