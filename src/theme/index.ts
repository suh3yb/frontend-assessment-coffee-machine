import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: '4px',
  // prettier-ignore
  color: {
    background: '#FFF',          // white
    error: '#CC3333',            // red
    buttonBgLight: '#AED7A0',    // green
    buttonBgDark: '#9BC88B',     // darker green
    textDark: '#000',            // black
    textLight: '#FFF',           // white
    },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Avenir Next", -apple-system, Roboto, sans-serif, serif;
    color: ${({ theme }) => theme.color.textDark};
  }

  a {
    color: inherit;
  }

  ul {
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
    list-style-type: none;
  }

  button {
    color: transparent;
    background: transparent;
    border: 0;
    line-height: 0;
    font-size: 1em;
  }
`;
