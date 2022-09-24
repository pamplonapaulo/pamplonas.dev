import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  align-items: baseline;
`

export const Letter = styled.h1`
  font-size: 4em;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  transform: translateY(8px);
  transition: 0.2s all ease;
`

export const Span = styled.span`
  font-size: 2em;
  font-weight: bold;
  transform: translateY(7px);
  cursor: default;
`

export const Frame = styled.div`
  cursor: pointer;
  background: #efd81f;
  width: 50px;
  height: 50px;
  min-height: 50px;
  padding: 0 1px 0 0;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin-right: 5px;
  transition: 0.2s all ease;

  &:hover {
    background: #0074c2;

    ${Letter} {
      color: #fff;
    }
  }
`
