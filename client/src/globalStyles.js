import { createGlobalStyle } from 'styled-component';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Domine';
    padding: 20px 60px;

    @media screen and (max-width: 800px){
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;