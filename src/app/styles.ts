import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
    padding: 0;
    margin: 0
 }
  body {
    @import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap');
    font-family: 'Nothing You Could Do', cursive;
    padding: 0;
    margin: 0;
  }
`
