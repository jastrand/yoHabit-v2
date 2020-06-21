import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { userProfile } from '../reducers/userinfo'
import { Input, Label, } from '../components/FormStyle'


export const ImageForm = () => {
  const id = useSelector((state) => state.userProfile.user.id)
  const dispatch = useDispatch()
  const fileInput = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])

    fetch(`http://localhost:8080/users/${id}/image`,
      { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((data) => {
        dispatch(userProfile.actions.setProfile({ imageUrl: data.imageUrl }))
      })

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Update profile image
      <input type="file" ref={fileInput} /></label>
      <button
        type='submit'>
        Add url
            </button>
    </form>
  )
}

const Form = styled.form`
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.color};
  width: 300px;
  border-radius: 8px;
  justify-content: space-between;
  font-family: 'Roboto';
  display: flex;
`

const Button = styled.button`
 
`