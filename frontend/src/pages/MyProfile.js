import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userProfile } from '../reducers/userinfo'
import { ImageForm } from '../components/ImageForm'
import { Dashboard } from '../components/Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export const MyProfile = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [message, setMessage] = useState()
  const [showForm, setShowForm] = useState(false)
  const token = useSelector((state) => state.userProfile.user.accessToken)
  const image = useSelector((state) => state.userProfile.user.profileImage)
  const habits = useSelector((store) => store.personalHabits.list.items)

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

  const numberOfHabits = habits.length

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <ImgText onClick={() => setShowForm(!showForm)}><span role="img" aria-label="Camera">📷</span></ImgText>
          {!image && <FontAwesomeIcon color="#48c9b0" size="5x" icon={faUserCircle} />}
          {image && <Image src={image} alt="profile picture"></Image>}
        </ImgWrapper>
        {showForm && <ImageForm function={setShowForm} />}
        <TextWrapper>
          <WelcomeText>{message}</WelcomeText>
          <Text>Habits:</Text>
          <Text>{numberOfHabits}</Text>
        </TextWrapper>
      </Wrapper>
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
  color: #48c9b0;
  margin: 0 0 0 20px;
  align-self: flex-start;
`
const Text = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #48c9b0;
  margin: 0 0 0 20px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;
  margin-bottom: 50px;
  background-color: #ECF0F1;
  border-radius: 10px;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TextWrapper = styled.div`
  
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
  border-radius: 50%;
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
  background-color: rgb(247,247,247);
  padding: 30px;
  margin: 5px 0 5px 0;
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