import React from 'react'
import styled from 'styled-components'

export const BackIcon = () => {

  return (
    <Icon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
      <path d='M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z' fill='#48c9b0' fillRule='evenodd' />
    </Icon>
  )
}

const Icon = styled.svg`
  width: 25px;
  transition: margin-right 1s;
  transition-timing-function: cubic-bezier(0.13, 1.9, 0, 1);

  &:hover {
    margin-right: 5px;
  }
`