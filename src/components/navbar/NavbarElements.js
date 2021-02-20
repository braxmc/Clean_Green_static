import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Wrap = styled.div`
  height:16vh;
  background-color: #242526;
  display: flex;
  justify-content: space-between;
`

export const Img = styled.img`
  height: 15vh;
  padding-left: 10px;
  padding-top: 10px;

  @media screen and (max-width: 450px) {
    width: 100px;
    height: 60px;
    padding: 0;
    display: flex;
    align-self: center;
  }
`

export const NavWrap = styled.div`
  display: flex;
`

export const Nav = styled(Link)`
  display: flex;
  align-items: flex-end;
  color: white;
  height: 100%;
  padding-right: 30px;
  font-size: 20px;
  font-family: 'Merriweather', serif;

  &:hover {
    color: #60BC46;
  }

  @media screen and (max-width: 770px) {
    font-size: 15px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
    padding-right: 20px;
  }
`