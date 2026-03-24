import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input, button, textarea {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
export {}
