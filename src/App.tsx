import React, { ReactElement, FC } from 'react'
import Calculator from './calculator/calculator'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap');
    font-family: 'Nothing You Could Do', cursive;
  }
`

const App: FC = (): ReactElement => (
  <>
    <GlobalStyles />
    <Calculator />
  </>
)

export default App
