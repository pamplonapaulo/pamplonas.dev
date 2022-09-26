import styled from 'styled-components'

export const Container = styled.section<{
  alignItems?: string
  justify: string
  direction?: string
  bgColor?: string
  isHeader?: boolean
  maxWidth?: string
}>`
  align-items: ${(p) => (p.alignItems ? p.alignItems : 'center')};
  background: ${(p) => (p.bgColor ? p.bgColor : 'transparent')};
  display: flex;
  flex-direction: ${(p) => (p.direction ? p.direction : 'row')};
  /* flex-wrap: wrap; */
  justify-content: ${(p) => p.justify};
  min-height: ${(p) => (p.isHeader ? '100%' : 'calc(100vh - 83px)')};
  margin: 0 auto;
  padding: 0 16px;
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : '100%')};
  //overflow-y: scroll;
  width: 100%;
`
