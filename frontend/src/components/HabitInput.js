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
            title: inputValue
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
      <Wrapper>
        <Label>
          Add your own habit:
      </Label>
        <Input
          type="text"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        ></Input>
      </Wrapper>
      <ItemButton
        color="#2980b9"
        type="submit"
        value="add"
      >+</ItemButton>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: tomato;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 50px;
  min-width: fit-content;

  @media (max-width: 400px) {
    max-width: 270px;
  }
`

const Input = styled.input`
  font-size: 20px;
  border: none;
  border-bottom: 1px solid;
  border-color: #86c1e9;
  margin: 0;
`

const Label = styled.label`
  font-size: 20px;
  color: #fff;
  margin-right: 10px;
  text-transform: uppercase;
  margin-bottom: 10px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 10px 0 10px;
`