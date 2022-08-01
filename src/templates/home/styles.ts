import styled from 'styled-components'

export const Main = styled.main`
  min-height: calc(100vh - 83px);
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    max-width: 900px;
  }
`
