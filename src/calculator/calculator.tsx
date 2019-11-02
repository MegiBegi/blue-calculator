import React, { FC, ReactElement } from 'react'
import { connect } from 'react-redux'
import { equals, includes, endsWith } from 'ramda'
import { noop } from 'ramda-adjunct'
import {
  getResult,
  provideInput,
  usedPlus,
  zero,
  reset
} from '../Redux/actions'
import { dispatch } from '../Redux/store'
import { RootState } from '../Redux/reducers'
import Buttons from './buttons/buttons'
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  ButtonsWrapper,
  ScoreInputWrapper,
  ResetButton
} from './styledCalculator'

interface CalculatorStateProps {
  currentValue: string
  checkingRenderOnPlus: number
  tooMuchText: boolean
}

interface CalculatorProps extends CalculatorStateProps {}

const Calculator: FC<CalculatorProps> = ({
  currentValue,
  tooMuchText
}): ReactElement => {
  const handleClick = (event: any): void => {
    const buttonName = event.target.name
    const includesPlus = includes('+', currentValue)
    const endsWithAPlus = endsWith('+', currentValue)

    if (equals(buttonName, '=') && !tooMuchText && includesPlus) {
      dispatch(getResult())
    } else if (equals(buttonName, '+') && !tooMuchText && !endsWithAPlus) {
      dispatch(usedPlus(buttonName))
    } else if (equals(buttonName, '0') && !tooMuchText) {
      dispatch(zero(buttonName))
    } else if (
      includes(buttonName, ['1', '2', '3', '4', '5', '6', '7', '8', '9']) &&
      !tooMuchText
    ) {
      dispatch(provideInput(buttonName))
    }
    if (equals(buttonName, '+') && includesPlus && !endsWithAPlus) {
      dispatch(getResult())
    }
  }

  const handleReset = (): void => {
    dispatch(reset())
  }

  return (
    <PageContainer>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
      <StyledCalculator>
        <ScoreInputWrapper>
          <ScoreInput
            type='text'
            value={currentValue || ''}
            onChange={noop}
            placeholder='0'
          />
        </ScoreInputWrapper>
        <ButtonsWrapper>
          <Buttons onButtonClick={handleClick} />
        </ButtonsWrapper>
      </StyledCalculator>
    </PageContainer>
  )
}

const mapStateToProps = (state: RootState): CalculatorStateProps => ({
  currentValue: state.displayed,
  checkingRenderOnPlus: state.plusCheck,
  tooMuchText: state.tooMuch
})

export default connect<any, any, any, any>(
  mapStateToProps,
  null
)(Calculator)
