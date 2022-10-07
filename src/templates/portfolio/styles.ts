import styled from 'styled-components'

export const Article = styled.article`
  margin: 35px 0;
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

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`

export const Anchor = styled.a`
  cursor: pointer;
  margin-top: 5px;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  width: 40px;
  border: 1px solid #fff;
  padding: 8px;
  opacity: 0.5;
  margin-right: 15px;
  height: 40px;
  transition: 0.2s ease all;

  padding: 0;
  height: 25px;
  width: 25px;
  border: none;

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
  margin: 5px 0 0px;
  text-align: left;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`
