import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

  body {
    text-rendering: optimizeSpeed;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "League Spartan", sans-serif;
    font-weight: 300;
    transition: all 0.50s linear;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  #root {
    min-height: 100vh;
  }

  img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}
  `;
