import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { habits } from '../reducers/habits'
import { ItemButton } from '../components/ItemStyle'


export const HabitInput = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const habit = useSelector((store) => store.habits.habitData)
  const createId = habit.length + 1

  // handle submit function to dispatch and add new Habit
  const handleOnSubmit = (e) => {
    e.preventDefault()
    // Limit the chars to min 3 and max 140
    if (inputValue.length > 2 && inputValue.length < 100) {
      // Dispatch the action to save the new habit item to list
      dispatch(
        habits.actions.addNewItem({
          habit: {
            id: createId,
            title: inputValue,
            quantity: 0
          }
        })
      )
      // clear the fields after submit
      setInputValue('')
    }

    else {
      return alert('OOPS! Chars must be min 3 and max 140')
    }
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        Add your own habit:
      </Label>
      <Input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      ></Input>
      <ItemButton
        color="#2980b9"
        type="submit"
        value="Add"
      >Add</ItemButton>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  font-size: 20px;
  border: none;
  border-bottom: 1px solid;
  border-color: #86c1e9;
  margin: 10px;
`

const Label = styled.label`
  font-size: 20px;
  color: #86c1e9;  
  margin-right: 10px;
`