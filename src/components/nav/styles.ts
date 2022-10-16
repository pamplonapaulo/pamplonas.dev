import styled from 'styled-components'

export const Item = styled.a<{
  downloadBtn?: boolean
  isSelected: boolean
  isClickable: boolean
}>`
  align-items: center;
  background: ${(p) => (p.downloadBtn ? '#222' : '#000')};
  box-shadow: 0px 1px 0 #222, 0px -1px 0 #222;
  color: ${(p) => (p.isSelected ? '#efd81f' : '#ccc')};
  display: flex;
  font-family: 'NeutraText';
  font-size: 2rem;
  height: 80px;
  margin: 0px;
  padding-left: 16px;
  text-align: left;
  width: 100%;
  text-transform: lowercase;
  transform: translateX(0%);
  transition: 0.2s ease all;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    cursor: ${(p) => (!p.isClickable ? 'default' : 'pointer')};
    padding-left: 5rem;

    &:hover {
      background: ${(p) => (!p.isClickable ? '#000' : '#222')};
      width: ${(p) => (!p.isClickable ? '100%' : '110%')};
      z-index: ${(p) => (!p.isClickable ? '1' : '2')};
    }
  }

  @media only screen and (max-height: 720px) {
    height: calc(calc(100vh - 81px) / 8);
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
  top: 81px;
  transform: ${(p) => (p.isVisible ? 'translateX(0);' : 'translateX(100%);')};
  transition: 0.2s ease all;
  z-index: 1;

  @media only screen and (min-width: 1024px) {
    width: 400px;
  }
`
