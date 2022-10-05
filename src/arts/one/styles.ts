import styled from 'styled-components'

export const Canvas = styled.canvas`
  /* background: #fff; */
`
export const Anchor = styled.a`
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 2px;
  position: absolute;
  transition: ease 0.2s all;
  z-index: 0;

  &:hover {
    color: #f32c43;
    border-color: #f32c43;
    transform: scale(1.1);
  }
`
