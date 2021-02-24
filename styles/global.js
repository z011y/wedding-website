import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: #FFF1E6;
    color: #000;
    display: flex;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: "Lato", BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: 300;
    transition: all 0.25s linear;
  }

  #__next {
    width: 100%;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #000;
  }

  h1,
  h2,
  h3,
  h4,
  a {
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  h1 {
    font-size: 48px;
    font-weight: 300;
    margin-block-end: 0px;
    margin-block-start: 0px;
  }

  h3 {
    font-size: 20px;
    font-weight: 300;
    line-height: 2em;
    margin-block-end: 0px;
    margin-block-start: 0px;
  }

  p {
    line-height: 2.5em;
    letter-spacing: 2px;
    font-size: 18px;
  }

  input {
    height: 50px;
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: #FFF1E6;
    font-size: 16px;
    font-family: 'Lato';
    margin-bottom: 24px;

    outline: none;
    padding: 15px;

    &::placeholder {
      color: #DDBEA9;
    }
  }

  button {
    height: 50px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #000;
    font-family: 'Lato';
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 300;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    transition: 0.15s ease-in-out;

    &:hover:enabled {
      cursor: pointer;
      background-color: #000;
      color: #FFF1E6;
    }
  }

  label {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #FFF1E6;
  }

  blockquote {
    border-left: 3px solid #ddbea9;
    padding-left: 8px;
    margin-inline-start: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
  `;
