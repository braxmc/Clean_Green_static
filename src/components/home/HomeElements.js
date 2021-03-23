import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Bg from '../images/cleanpic.jpg'

// what you see when you get onto site

export const HomeWrap = styled.div`
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 78vh;
`

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  height: 30vh;
  min-height: 250px;
  width: 800px;
  border: 1px solid #000000;
  border-radius: 20px;

  @media screen and (max-width: 770px) {
    width: 650px;
  }

  @media screen and (max-width: 450px) {
    width: 350px;
  }
`

export const Header = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 35px;

  @media screen and (max-width: 770px) {
    font-size: 25px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`

export const Info = styled.li`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  padding-top: 15px;
  width: 600px;

  @media screen and (max-width: 770px) {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
    width: 215px;
  }
`

// Everything below here is contact related

export const ContactWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  background-color: #EBEBEB;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`

export const ContactTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;

  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`

export const ContactInfo = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  padding-top: 20px;

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Call = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  text-decoration: underline;
`

export const Email = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  text-decoration: underline;
  padding-left: 30px;
`

export const Icon = styled.img`
  height: 3vh;
  padding-top: 20px;
  padding-right: 5px;
`

// Everything below here is services related

export const ServicesWrap = styled.div`

`

export const Regular = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #72C5E4;
  height: 400px;

  @media screen and (max-width: 450px) {
    height: 300px;
  }
`

export const Flip = styled.div`
  display: flex;
  background-color: #A3D897;
  height: 400px;

  @media screen and (max-width: 450px) {
    height: 300px;
  }
`

export const Img = styled.img`
  display: flex;
  align-self: center;
  height: 400px;
  width: 50%;

  @media screen and (max-width: 450px) {
    height: 300px;
  }
`

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  border: 2px solid #000;
  width: 40vw;
  height: 40vh;
  min-height: 250px;

  @media screen and (max-width: 770px) {
    height: 20vh;
  }

`

export const ServiceTitle = styled.h2`
  padding-top: 20px;
  font-family: 'Oswald', sans-serif;
  font-size: 35px;

  @media screen and (max-width: 770px) {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 25px;
  }

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    font-size: 14px;
    width: 35vw;
  }
`

export const ServiceInfo = styled.li`
  padding-top: 20px;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 770px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
  }

  @media screen and (max-width: 450px) {
    font-size: 9px;
    width: 35vw;
    padding-left: 10px;
  }
`

export const GreenButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  height: 45px;
  min-height: 25px;
  width: 150px;
  max-width: 180px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #60BC46;
  
  &:hover{
    background-color: #A3D897;
  }

  @media screen and (max-width: 770px) {
    width: 125px;
    font-size: 15px;
  }

  @media screen and (max-width: 450px) {
    width: 100px;
    height: 30px;
    font-size: 13px;
  }

`

export const BlueButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  height: 45px;
  min-height: 25px;
  width: 150px;
  max-width: 180px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #019DD0;
  
  &:hover{
    background-color: #72C5E4;
  }

  @media screen and (max-width: 770px) {
    width: 125px;
    font-size: 15px;
  }

  @media screen and (max-width: 450px) {
    width: 100px;
    height: 30px;
    font-size: 13px;
  }
`

export const Nav = styled(Link)`

`