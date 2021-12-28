import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    min-height: 100vh;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-color: #FFF;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button, textarea {
    font-family: inherit;
  }
`;
