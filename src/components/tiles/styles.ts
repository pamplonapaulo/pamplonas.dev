import styled from 'styled-components'

export const H = styled.h1`
  font-weight: 100;
  text-shadow: 0px 1px 4px #000;
  flex-direction: column;
  display: flex;
  justify-content: center;

  font-size: 16px;

  @media only screen and (min-width: 1024px) {
    font-size: 4rem;
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
  background: red;
  width: 4vw;
  height: 4vw;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0.5vw;

  &&:nth-child(1n + 0) {
    background: var(--blue);
  }
  &&:nth-child(2n + 0) {
    background: var(--green);
  }
  &&:nth-child(3n + 0) {
    background: var(--purple);
  }
  &&:nth-child(4n + 0) {
    background: var(--red);
  }
  &&:nth-child(5n + 0) {
    background: var(--yellow);
  }
`

export const Char = styled.h5`
  font-size: 3vw;
  font-weight: 100;
  text-align: center;
  color: var(--white);
`
