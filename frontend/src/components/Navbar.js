import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SignedIn = () => {
  return (
    <LinkWrapper>
      <StyledLink to="/settings">Your settings</StyledLink>
      <StyledLink to="/profile">Dashboard</StyledLink>
      <StyledLink to="/settings">About</StyledLink>
      <StyledLink to="/settings">Contact</StyledLink>
    </LinkWrapper>
  )
}

const SignedOut = () => {
  return (
    <LinkWrapper>
      <StyledLink to="/login">Log in</StyledLink>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/settings">About</StyledLink>
      <StyledLink to="/settings">Contact</StyledLink>
    </LinkWrapper>
  )
}

const MobileSignedIn = () => {
  return (
    <LinkWrapperMobile>
      <StyledLink to="/settings">Your settings</StyledLink>
      <StyledLink to="/profile">Dashboard</StyledLink>
      <StyledLink to="/settings">About</StyledLink>
      <StyledLink to="/settings">Contact</StyledLink>
      <StyledLink to="/settings">Contact</StyledLink>
    </LinkWrapperMobile>
  )
}

const MobileSignedOut = () => {
  return (
    <LinkWrapperMobile>
      <StyledLink to="/login">Log in</StyledLink>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/settings">About</StyledLink>
      <StyledLink to="/settings">Contact</StyledLink>
    </LinkWrapperMobile>
  )
}


export const Navbar = () => {
  const token = useSelector((state) => state.userProfile.user.accessToken)
  const [open, setOpen] = useState(false)

  return (
    <Navigation>
      <Logo>
        <LogoLink to="/">YoHabit</LogoLink>
      </Logo>
      {token &&
        <SignedIn />}
      {!token &&
        <SignedOut />}

      <MobileView>
        <Burger onClick={() => setOpen(prev => !prev)}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Burger>

        {open && token && <MobileSignedIn />}
        {open && !token && <MobileSignedOut />}
      </MobileView>

    </Navigation >
  )
}
const MobileView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 830px) {
    display: none;
  }
`

const Navigation = styled.nav`
  margin: 0;
  padding: 20px 10px 20px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row; 
  align-items: flex-start;
  background-color: rgb(247,247,247);
 
  @media (max-width: 830px) {
    align-items: flex-start;
  }
`

const Logo = styled.h1`
  font-size: 30px;
  margin-left: 13px;
  margin: 0; 
  padding: 0;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  color: #48C9B0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  margin: 5px;
  color: #48C9B0;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`

const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 830px) {
  display: none;
}
`
const Line = styled.span`
  width: 30px;
  height: 5px;
  margin: 3px;
  background-color:#48C9B0;
`
const LinkWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 830px) {
    display: none;
  }
`

const LinkWrapperMobile = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 830px) {
    display: none;
  }
`