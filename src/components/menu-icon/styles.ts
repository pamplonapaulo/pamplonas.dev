import styled from 'styled-components'

export const Dot = styled.span`
  background: #ccc;
  height: 1px;
  width: 30px;
  margin: 0px;
  position: absolute;
  display: block;
  left: 0;
`

export const Wrap = styled.div<{ isClicked: boolean }>`
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;

  ${Dot} {
    transition: 0.2s ${(p) => (p.isClicked ? 'top' : 'transform')} 0s,
      0.2s ${(p) => (p.isClicked ? 'transform' : 'top')} 0.3s;

    &:nth-of-type(1) {
      top: ${(p) => (p.isClicked ? '50%' : '0')};
      transform: ${(p) => (p.isClicked ? 'rotate(135deg);' : 'rotate(0deg);')};
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: ${(p) => (p.isClicked ? 'rotate(135deg);' : 'rotate(0deg);')};
    }

    &:nth-of-type(3) {
      top: ${(p) => (p.isClicked ? '50%' : '100%')};
      transform: ${(p) => (p.isClicked ? 'rotate(45deg);' : 'rotate(0deg);')};
    }
  }
`
