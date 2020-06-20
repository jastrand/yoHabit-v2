import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.color};
  width: ${props => props.width || "300px"};
  border-radius: 8px;
  margin: 5px;
  padding: 12px 8px 8px 12px;
  height: 60px;
`

export const Category = styled.select`
  font-size: 15px;
  color: #2980b9;
  font-weight: bold;
  border: none;
  padding: 5px;
  font-family: 'Roboto';
  width: fit-content;
  margin: 5px;
`

export const ItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ItemText = styled.p`
  color: ${props => props.color || "white"};
  margin: 0;
  font-size: ${props => props.fontSize || "20px"};
  text-transform: uppercase;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
`
export const DashboardView = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
`

export const Text = styled.p`
  color: ${props => props.color || "#5DADE2;"};
  margin-top: 20px;
  font-size: ${props => props.fontSize || "20px"};
`
export const TextLink = styled(Link)`
  color: ${props => props.color || "#5DADE2;"};
  margin-top: 20px;
  font-size: ${props => props.fontSize || "20px"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const ItemButton = styled.button`
  background-color: ${props => props.color};
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  color: white;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

export const IconWrapper = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  text-align: center;
  padding: 0;
  z-index: 999;

  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`


export const AddButton = styled.button`
  border: none;
  text-align: center;
  background-color: transparent;
  padding: 0;
  font-size: 30px;
  margin: 0;

  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`

export const Tooltip = styled.p`
  display: none;
  min-width: 200px;
  margin-left: 20px;
  

  ${ItemBox}:hover & {
    display: block;
    width: fit-content;
    color: grey;
  }
`




