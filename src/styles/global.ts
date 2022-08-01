import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue: #3494DF;
    --green: #38C1AD;
    --purple: #60079F;
    --red: #F32C43;
    --yellow: #f8f32b;
    --black: #000000;
    --white: #fff;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: black;
    color: var(--white);
    //font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    //font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace;
    font-family: monospace;
    font-weight: 100;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
