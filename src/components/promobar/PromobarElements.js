import styled from 'styled-components'

export const Wrap = styled.div`
  height: 6vh;
  background-color: #019DD0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Promo = styled.h1`
  font-size: 24px;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }

  @media screen and (max-width: 770px) {
    font-size: 15px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`

export const Number = styled.h1`
  font-size: 24px;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }

  @media screen and (max-width: 770px) {
    font-size: 15px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
`

export const Ph = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 35px;
  }

  @media screen and (max-width: 770px) {
    font-size: 22px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`