import styled from 'styled-components'

export const Article = styled.article`
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Title = styled.p`
  color: #ccc;
  font-family: 'NeutraText';
  font-size: 3.25em;
  font-weight: normal;
  line-height: 2;
  margin: 30px 0 45px;
  text-align: left;
  padding-top: 5px;
  width: 100%;
  font-size: 1.75em;
  letter-spacing: 3px;
  text-transform: uppercase;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`

// export const Anchor = styled.a`
//   color: #38c1ad;
//   cursor: pointer;
//   display: flex;
//   flex-direction: row;
//   line-break: anywhere;
//   margin-top: 5px;
//   text-decoration: underline;
//   width: fit-content;
// `

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 40px;
`

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  width: 30px;
`

export const Item = styled.div`
  width: 30px;
  margin-right: 20px;
`

export const Descr = styled.p`
  color: rgba(144, 144, 144, 0.8);
  display: flex;
  flex-direction: column;
  font-family: 'NeutraText';
  font-size: 2em;
  font-weight: normal;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  transition: 0.2s ease all;

  &:hover {
    color: #38c1ad;
    text-decoration: underline;
  }
`

export const Anchor = styled.a`
  cursor: pointer;
`
