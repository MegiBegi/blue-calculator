import React, { FC, ReactElement } from 'react'
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  ButtonsWrapper,
  ScoreInputWrapper
} from './styledCalculator'
import Buttons from './buttons/buttons'
import { setValue } from '../Redux/actions'
import { dispatch } from '../Redux/store'
import { RootState } from '../Redux/reducers'
import { connect } from 'react-redux'

interface CalculatorStateProps {
  currentValue: number
}

interface CalculatorProps extends CalculatorStateProps {}

const Calculator: FC<CalculatorProps> = ({ currentValue }): ReactElement => {
  const handleClick = (): void => {
    currentValue >= 0 ? dispatch(setValue()) : console.log('false')
    console.log(currentValue)
  }

  return (
    <PageContainer>
      <StyledCalculator>
        <ScoreInputWrapper>
          <ScoreInput type='text' />
        </ScoreInputWrapper>
        <ButtonsWrapper>
          <Buttons onButtonClick={handleClick} />
        </ButtonsWrapper>
      </StyledCalculator>
    </PageContainer>
  )
}

const mapStateToProps = (state: RootState): CalculatorStateProps => ({
  currentValue: state.value
})

export default connect<any, any, any, any>(
  mapStateToProps,
  null
)(Calculator)
