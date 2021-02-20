import styled from 'styled-components'

import Bg from '../images/cleanpic.jpg'

export const ServicesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const ServicesTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  font-size: 60px;
  padding-top: 40px;

  background: linear-gradient(to right, #60BC46, #019DD0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ServicesTitle2 = styled.h3`
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;

`

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  width: 500px;
  border: 2px solid #000;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
`

export const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  font-size: 40px;

  @media screen and (max-width: 650px) {
    font-size: 35px;
  }
`

export const CardTitle2 = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  width: 400px;
`

export const CardInfo = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
`

export const CardWrap = styled.div`
  padding: 15px 0;
`