import styled from 'styled-components'

import Bg from '../images/cleanpic.jpg'

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const AboutTitle = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  padding: 40px 0px;

  background: linear-gradient(to right, #60BC46, #019DD0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  border: 2px solid #000;
  margin-bottom: 20px;
  padding-bottom: 10px;

  @media screen and (max-width: 770px) {
    width: 550px;
  }
`

export const CardTitle = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 40px;
  padding: 10px;

  @media screen and (max-width: 770px) {
    font-size: 35px;
  }
`

export const AboutInfo = styled.p`
  width: 500px;
  font-family: 'Montserrat', sans-serif;
  text-indent: 40px;
  line-height: 25px;
  font-size: 16px;
  padding-bottom: 10px;

  @media screen and (max-width: 770px) {
    font-size: 14px;
  }
`