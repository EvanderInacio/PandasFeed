import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFF;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;

    --green-300: #00B37E;
    --green-500: #00875f;

    --red-500: #F75A68;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px var(--green-500);
  }

  body {
    background: var(--gray-900);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  } 

  
  a{
    color: inherit;
    text-decoration: none;
  }

  .wrapper {
    max-width: 70rem;
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 256px 1fr ;
    gap: 2rem;
    align-items: flex-start;    
  }

  @media(max-width: 768px) {
    html {
      font-size: 87.5%;
    }
    
    .wrapper{
      grid-template-columns: 1fr;
    }
  }

::-webkit-scrollbar{
  width: 0.5rem;
  background-color: var(--gray-700);
}
::-webkit-scrollbar-thumb{
  border-radius: 0.5rem;
  background-color: var(--green-500);
}
::-webkit-scrollbar-thumb:hover{
  background-color: var(--green-300);
}

`

export default GlobalStyle
