import React, { ReactElement } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap');
    font-family: 'Nothing You Could Do', cursive;
  }
`

const Background = styled.div`
  width: 1600px;
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Calculator = styled.div`
  width: 300px;
  height: 506px;
  border-radius: 10px;
  background-color: #0095b8;
`

const Window = styled.input`
  width: 249px;
  height: 63px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 30px;
  margin-left: 25px;
  margin-right: 25px;
  padding: 0;
  font-size: 36px;
  font-family: 'Nothing You Could Do';
  text-indent: 20px;
  line-height: 63px;
`

const App: React.FC = (): ReactElement => {
  return (
    <Background>
      <GlobalStyles />
      <Calculator>
        <Window type='text'></Window>
      </Calculator>
    </Background>
  )
}

export default App
