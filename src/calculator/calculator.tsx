import React, { FC, ReactElement } from 'react'
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  ButtonsWrapper,
  ScoreInputWrapper
} from './styledCalculator'
import Buttons from './buttons/buttons'
import { setValue, addNumbers } from '../Redux/actions'
import { dispatch } from '../Redux/store'
import { RootState } from '../Redux/reducers'
import { connect } from 'react-redux'

interface CalculatorStateProps {
  currentValue: number
}

interface CalculatorProps extends CalculatorStateProps {}

const Calculator: FC<CalculatorProps> = ({ currentValue }): ReactElement => {
  const handleClick = (event: any): void => {
    const buttonName = event.target.name
    buttonName === '+' ? dispatch(addNumbers()) : dispatch(setValue(buttonName))
  }

  return (
    <PageContainer>
      <StyledCalculator>
        <ScoreInputWrapper>
          <ScoreInput
            type='text'
            value={currentValue}
            onChange={() => 'yabadabadoo'}
          />
        </ScoreInputWrapper>
        <ButtonsWrapper>
          <Buttons onButtonClick={handleClick} />
        </ButtonsWrapper>
      </StyledCalculator>
      <h1>the current value is {currentValue}</h1>
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
