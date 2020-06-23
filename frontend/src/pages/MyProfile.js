import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Dashboard } from '../components/Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export const MyProfile = () => {
  const [message, setMessage] = useState()
  const token = useSelector((state) => state.userProfile.user.accessToken)
  const image = useSelector((state) => state.userProfile.user.profileImage)
  const habits = useSelector((state) => state.personalHabits.list.items)

  console.log(habits)

  useEffect(() => {
    fetch('https://yohabit.herokuapp.com/profile', {
      method: 'GET',
      headers: { 'Authorization': token, 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) =>
        setMessage(data.message))
  }, [token])

  const numberOfHabits = habits.length

  return (
    <Container>
      <Wrapper>
        {token &&
          <ImgWrapper>
            {!image && <FontAwesomeIcon color="#fff" size="5x" icon={faUserCircle} />}
          </ImgWrapper>}

        <TextWrapper>
          <WelcomeText>{message}</WelcomeText>
          {token &&
            <Wrap>
              <Text>Habits:</Text>
              <Text>{numberOfHabits}</Text>
            </Wrap>}
        </TextWrapper>
      </Wrapper>

      {token &&
        <ProfileWrapper>
          <Dashboard />
        </ProfileWrapper>}
    </Container>
  )
}

const WelcomeText = styled.p`
  font-size: 30px;
  color: #fff;
  margin: 0;
`
const Text = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 2px;
  color: white;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;
  margin-bottom: 50px;
  background-color: #48c9b0;
  border-radius: 10px;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

const ImgWrapper = styled.div`
  border-radius: 50%;
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
