import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    font-family: "Roboto";
    text-rendering: optimizeLegibility;
    height: 100vh;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  `;

export const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const theme = {
  primaryDark: '#0D0C1D',
  primaryLight: '#EFFFFA',
  primaryHover: '#343078',
  mobile: '576px',
};
