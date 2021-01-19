import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import '~bootstrap/scss/bootstrap';
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  @import './assets/styles/variables/colors.scss';
  @import './assets/styles/variables/sizes.scss';

  body {
    margin: 0 auto;
    padding: 0;
    -webkit-font-smoothing: subpixel-antialiased;
    font-family: 'Montserrat', sans-serif;
    font-size: $tn-font-size;
    font-weight: $regular-font-weight;
    font-style: normal;
    line-height: $tn-line-height;
    color: $text-color;
  }

  input {
    font-family: 'Montserrat', sans-serif;
    color: $text-color;
  }
`
