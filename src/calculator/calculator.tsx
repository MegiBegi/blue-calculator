import React from 'react'
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  AllButtons
} from './styledCalculator'
import Buttons from './buttons/buttons'

const Calculator = () => (
  <PageContainer>
    <StyledCalculator>
      <ScoreInput type='text' />
      <AllButtons>
        <Buttons />
      </AllButtons>
    </StyledCalculator>
  </PageContainer>
)

export default Calculator
