import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'

const Global = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    display: flex;
    margin: 0;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`

export default Global
