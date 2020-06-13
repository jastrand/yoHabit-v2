import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.color};
  width: ${props => props.width || "300px"};
  border-radius: 8px;
  margin: 2px;
  padding: 8px 8px 8px 20px;
  height: 50px;
`
export const ItemText = styled.p`
  color: ${props => props.color || "white"};
  margin: 0;
  font-size: ${props => props.fontSize};
  text-transform: uppercase;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const DashboardView = styled.div`
  display: flex; 
  flex-direction: row;
  width: 100%;
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