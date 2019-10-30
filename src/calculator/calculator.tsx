import React from 'react'
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  AllButtons,
  ScoreInputWrapper
} from './styledCalculator'
import Buttons from './buttons/buttons'

const Calculator = () => (
  <PageContainer>
    <StyledCalculator>
      <ScoreInputWrapper>
        <ScoreInput type='text' />
      </ScoreInputWrapper>
      <AllButtons>
        <Buttons />
      </AllButtons>
    </StyledCalculator>
  </PageContainer>
)

export default Calculator
