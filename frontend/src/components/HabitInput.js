// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { habits } from '../reducers/habits'


// export const HabitInput = () => {
//   const dispatch = useDispatch()
//   const [inputValue, setInputValue] = useState('')
//   const [category, setCategory] = useState('weekly')

//   // handle submit function to dispatch and add new Habit
//   const handleOnSubmit = (e) => {
//     e.preventDefault()

//     // Limit the chars to min 3 and max 140
//     if (inputValue.length > 2 && inputValue.length < 140) {
//       // Dispatch the action to save the new todo item to list
//       dispatch(
//         habits.actions.addNewItem({
//           title: inputValue,
//           quantity: 0,
//           category: category,
//         })
//       )
//       // clear the fields after submit
//       setInputValue('')
//       setCategory('')
//     }

//     else {
//       return alert('OOPS! Chars must be min 3 and max 140')
//     }
//   }

//   return (
//     <form className="todo-input" onSubmit={handleOnSubmit}>
//       What's cooking?
//       <input
//         type="text"
//         onChange={e => setInputValue(e.target.value)}
//         value={inputValue}
//       ></input>

//       <div class="category">
//         <select
//           value={category}
//           onChange={(event) => setCategory(event.target.value)}
//         >
//           <option value='weekly'>Weekly</option>
//           <option value='monthly'>Monthly</option>
//         </select>
//       </div>
//       <input
//         type="submit"
//         value="Add todo"
//       ></input>
//     </form>
//   )
// }