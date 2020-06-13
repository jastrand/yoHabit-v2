import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ToggleButton } from '../components/ToggleButton'
import { ItemBox, ItemText, IconWrapper, Text, TextLink } from '../components/ItemStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { MonthlyStats } from '../components/MonthlyStats'

export const Dashboard = () => {
  const habits = useSelector((store) => store.personalHabits.list.items)
  const [open, setOpen] = useState(false)

  const noItems = habits.length <= 0

  return (
    <div>
      {!noItems ? (
        <div>
          <ToggleButton />
          <h1>Dashboard:</h1>
          {habits.map((habit) => (
            <div key={habit.id}>
              <ItemBox color="#5dade2" >
                <ItemText color="white">{habit.title} {habit.category} {habit.quantity}/7 days</ItemText>
                <IconWrapper onClick={() => setOpen(prev => !prev)}>
                  <FontAwesomeIcon color="white" icon={faAngleDoubleDown} />
                </IconWrapper>
              </ItemBox>
              {open && <MonthlyStats />}
            </div>
          ))}
        </div>
      ) : (
          <Text>Go to "<TextLink to="/settings">Your Settings</TextLink>" to pick your habits!</Text>
        )}
    </div>
  )
}

