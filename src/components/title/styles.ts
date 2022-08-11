import styled from 'styled-components'

export const P = styled.p`
  font-weight: 100;
  text-shadow: 0px 1px 4px #000;
  flex-direction: column;
  display: flex;
  justify-content: center;
  font-size: 2em;

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  width: auto;
`

export const Word = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Tile = styled.div`
  background: var(--white);
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
`

export const Char = styled.h5`
  font-size: 18px;
  font-weight: 100;
  text-align: center;
  color: var(--black);
`
