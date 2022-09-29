import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0;
      border: 0;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: 0;
    }

    &::-webkit-scrollbar-thumb {
      outline: none;
      width: 0;
      height: 0;;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.01);
      height: 2px !important;
      width: 2px !important;
    }
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
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
