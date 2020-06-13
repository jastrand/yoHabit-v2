import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { userProfile } from '../reducers/userinfo'
import { Form, Header, Input, Label, Button, Register } from '../components/FormStyle'


export const LogIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [invalid, setInvalid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/sessions', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          setInvalid(true)
        } else {
          dispatch(
            userProfile.actions.loggedIn({
              id: data.userId,
              accessToken: data.accessToken,
              loggedIn: true,
              profileImage: data.profileImage,
              personalHabits: data.personalHabits
            })
          )
          setInvalid(false)
          history.push('/profile')
        }
      })
  }

  return (
    <Section>
      <Form color="white" onSubmit={(e) => handleSubmit(e)}>
        <Header>Login</Header>
        <Label>
          Username
      <Input
            type='text'
            minLength={3}
            maxLength={20}
            borderColor='grey'
            onChange={(e) => setName(e.target.value)}
            required>
          </Input>
        </Label>
        <Label>
          Password
      <Input
            type='password'
            minLength={8}
            maxLength={20}
            borderColor='grey'
            onChange={(e) => setPassword(e.target.value)}
            required>
          </Input>
          {invalid && <p>Invalid username/password</p>}
        </Label>
        <Button
          disabled={!name || !password}
          type='submit'>LOGIN</Button>
        <Register>Not a member? <Link style={{ color: "#48c9b0" }} to="/register">Sign up</Link></Register>
      </Form>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`