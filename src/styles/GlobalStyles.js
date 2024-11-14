import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

;
  
  body {
    font-family: font-family: "Anton SC", sans-serif; /* Aplicando a fonte em todo o corpo */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: font-family: "Anton SC", sans-serif; /* Aplicando a fonte aos títulos */
  }

  p, span, a {
    font-family: font-family: "Anton SC", sans-serif; /* Aplicando a fonte aos parágrafos e outros textos */
  }
`;

export default GlobalStyle;
