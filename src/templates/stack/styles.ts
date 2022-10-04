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

export const Anchor = styled.a`
  color: #38c1ad;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  line-break: anywhere;
  margin-top: 5px;
  text-decoration: underline;
  width: fit-content;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  width: 100px;

  @media only screen and (min-width: 1024px) {
    height: 150px;
    width: 150px;
  }
`

export const Item = styled.div`
  height: 185px;
  width: 100px;
  /* margin: 0 10px 5px 0; */

  @media only screen and (min-width: 1024px) {
    height: 220px;
    width: 150px;
    margin: 0 60px 15px 0;
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
