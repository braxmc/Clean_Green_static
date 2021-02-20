import styled from 'styled-components'

import Bg from '../images/cleanpic.jpg'

export const ContactWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 78vh;
  min-height: 650px;
`

export const ContactTitle = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  padding: 40px 0px;

  background: linear-gradient(to right, #60BC46, #019DD0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`

export const Icon = styled.img`
  height: 35px;
`

export const Info = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  padding-left: 10px;
  text-decoration: underline;
`
export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  border: 2px solid #000;
  border-radius: 20px;
  padding: 20px 40px;
`

export const InfoTitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 40px;
  padding-bottom: 10px;
`