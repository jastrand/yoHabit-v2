import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.color};
  width: 500px;
  border-radius: 8px;
  padding: 80px 8px;
  box-sizing: border: box;
  justify-content: space-between;
  font-family: 'Roboto';
  border: 2px solid lightgrey;
`

export const Header = styled.p`
  font-size: 30px;
  color: #48c9b0;
  margin: 0;
  margin-bottom: 18px;
`

export const Input = styled.input`
  margin: 8px 0px;
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid;
  border-color: #48c9b0;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #48c9b0;
  width: 70%;
`
export const Button = styled.button`
  margin: 8px 0px;
  width: 70%;
  background: ${props => props.color || '#48c9b0'};
  font-size: 20px;
  font-weight: bold;
  padding: 12px;
  color: white;
  margin: 30px 0 40px 0;
  border: none;
`


export const Register = styled.p`
  color: #48c9b0;
`
