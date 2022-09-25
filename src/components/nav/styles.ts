import styled from 'styled-components'

export const Item = styled.p`
  background: #000;
  box-shadow: 0px 1px 0 #222, 0px -1px 0 #222;
  color: #ccc;
  cursor: pointer;
  font-size: 2rem;
  line-height: 4;
  margin: 0px;
  padding-left: 16px;
  text-align: left;
  width: 100%;
  transform: translateX(0%);
  transition: 0.2s ease all;
  z-index: 0;

  @media only screen and (min-width: 1024px) {
    padding-left: 5rem;

    &:hover {
      background: #222;
      width: 110%;
      z-index: 1;
    }
  }
`

export const Nav = styled.nav<{ isVisible?: boolean }>`
  align-items: end;
  border-left: 1px solid #222;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  position: absolute;
  right: 0;
  transform: ${(p) => (p.isVisible ? 'translateX(0);' : 'translateX(100%);')};
  transition: 0.2s ease all;

  @media only screen and (min-width: 1024px) {
    width: 400px;
  }
`
