import styled from 'styled-components'

export const Item = styled.p`
  background: #000;
  border-bottom: 1px solid #222;
  color: #ccc;
  cursor: pointer;
  font-size: 2rem;
  line-height: 4;
  margin: 0px;
  text-align: center;
  width: 100%;
  transform: translateX(0%);
  transition: 0.2s ease all;

  &:hover {
    transform: translateX(-10%);
    background: #222;
    box-shadow: 40px 0px #222;
  }
`

export const Nav = styled.nav<{ isVisible?: boolean }>`
  border-left: 1px solid #222;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  position: absolute;
  right: 0;
  transform: ${(p) => (p.isVisible ? 'translateX(0);' : 'translateX(100%);')};
  transition: 0.2s ease all;
`
