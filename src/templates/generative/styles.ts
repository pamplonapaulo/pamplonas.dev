import styled from 'styled-components'

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
  transition: 0.2s all ease;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`

export const Anchor = styled.a`
  color: #38c1ad;
  cursor: pointer;
  line-break: anywhere;
  margin-top: 5px;
  text-decoration: underline;
  width: fit-content;
`

export const Descr = styled.p`
  color: rgba(144, 144, 144, 0.8);
  display: flex;
  flex-direction: column;
  font-family: 'NeutraText';
  font-size: 2em;
  font-weight: normal;
  line-height: 1.5;
  margin: 5px 0 0px;
  text-align: left;
  transition: 0.2s all ease;
  width: 100%;
`

export const Article = styled.article`
  margin: 35px 0;
  cursor: pointer;

  &:hover {
    ${Headline} {
      color: #efd81f;
    }

    ${Descr} {
      color: #efd81f;
    }
  }
`
