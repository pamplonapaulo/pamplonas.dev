import styled from 'styled-components'

export const Item = styled.p<{ isCurrent: boolean }>`
  background: #000;
  box-shadow: 0px 1px 0 #222, 0px -1px 0 #222;
  color: ${(p) => (p.isCurrent ? '#efd81f' : '#ccc')};
  cursor: ${(p) => (p.isCurrent ? 'default' : 'pointer')};
  font-family: 'NeutraText';
  font-size: 2rem;
  line-height: 4;
  margin: 0px;
  padding-left: 16px;
  text-align: left;
  width: 100%;
  transform: translateX(0%);
  transition: 0.2s ease all;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    padding-left: 5rem;

    &:hover {
      /* background: #222;
      width: 110%;
      z-index: 2; */

      background: ${(p) => (p.isCurrent ? '#000' : '#222')};
      width: ${(p) => (p.isCurrent ? '100%' : '110%')};
      z-index: ${(p) => (p.isCurrent ? '1' : '2')};
    }
  }
`

export const Nav = styled.nav<{ isVisible?: boolean }>`
  align-items: end;
  background: #000;
  border-left: 1px solid #222;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  position: fixed;
  right: 0;
  top: 83px;
  transform: ${(p) => (p.isVisible ? 'translateX(0);' : 'translateX(100%);')};
  transition: 0.2s ease all;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    width: 400px;
  }
`
