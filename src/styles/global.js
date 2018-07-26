import { injectGlobal } from 'styled-components';

injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color:#9B65E5;
    text-rendering: optimizeLegibility !import;
    -webkit-font-smoothing: antialiased !import;
    font-family: sans-serif;
  }
`;
