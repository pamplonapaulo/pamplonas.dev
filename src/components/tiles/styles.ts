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
  width: 10px;
  height: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;

  &&:nth-child(9n + 0) {
    background: var(--blue);
  }
  &&:nth-child(14n + 0) {
    background: var(--green);
  }
  &&:nth-child(3n + 0) {
    background: var(--purple);
  }
  &&:nth-child(8n + 0) {
    background: var(--red);
  }
  &&:nth-child(5n + 0) {
    background: var(--yellow);
  }
  &&:nth-child(6n + 0) {
    background: var(--blue);
  }

  @media only screen and (min-width: 1024px) {
    width: 1vw;
    height: 1vw;
    margin: 0.5vw;
  }
`

export const Char = styled.h5`
  font-size: 3vw;
  font-weight: 100;
  text-align: center;
  color: var(--black);
  opacity: 0.5;
`
