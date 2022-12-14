import styled from 'styled-components'

// export const PageTitle = styled.h1`
//   color: #ccc;
//   font-family: 'NeutraText';
//   font-size: 7rem;
//   font-weight: normal;
//   margin-top: 16px;
//   text-align: left;
//   width: 100%;

//   @media only screen and (min-width: 1024px) {
//     margin-top: 200px;
//     width: 50%;
//   }
// `

export const Title = styled.p`
  //background: linear-gradient(to right, #000, #38c1ad);
  border-bottom: solid 1px #38c1ad;
  color: #38c1ad;
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

  &:nth-of-type(1) {
    border: none;
    color: #ccc;
  }
`

export const Headline = styled.p`
  color: #ccc;
  font-family: 'NeutraText';
  text-align: left;
  width: 100%;
  color: #ccc;
  font-size: 1.75em;
  letter-spacing: 3px;
  line-height: 1.2;
  margin-top: 5px;
  text-transform: uppercase;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${Title} {
    border-bottom: solid 1px #38c1ad;
    color: #38c1ad;
    width: fit-content;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`

export const Anchor = styled.a`
  color: #38c1ad;
  cursor: pointer;
  line-break: anywhere;
  margin-top: 5px;
  opacity: 0.4;
  text-decoration: underline;
  transition: 0.2s ease all;
  width: fit-content;

  &:hover {
    opacity: 1;
  }
`

export const Descr = styled.p`
  color: rgba(144, 144, 144, 0.8);
  display: flex;
  flex-direction: column;
  font-family: 'NeutraText';
  font-size: 2em;
  font-weight: normal;
  line-height: 1.5;
  margin: 5px 0 30px 0;
  text-align: left;
  width: 100%;
`
