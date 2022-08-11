import styled from 'styled-components'

export const Container = styled.section<{
  justify: string
  bgColor?: string
  isHeader?: boolean
}>`
  align-items: center;
  background: ${(p) => (p.bgColor ? p.bgColor : '#000')};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(p) => p.justify};
  margin: 0 auto;
  width: 100%;
  height: ${(p) => (p.isHeader ? '100%' : 'calc(100vh - 83px)')};
  max-width: 1480px;
  flex-direction: row;
  padding: 0 1rem;
`
