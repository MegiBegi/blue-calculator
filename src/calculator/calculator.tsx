import React, { FC, ReactElement } from 'react'
import { connect } from 'react-redux'
import { includes, endsWith } from 'ramda'
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

    switch (buttonName) {
      case '=':
        !tooMuchText && includesPlus && dispatch(getResult())
        break

      case '+':
        !tooMuchText && !endsWithAPlus && dispatch(usedPlus(buttonName))
        includesPlus && !endsWithAPlus && dispatch(getResult())
        break

      case '0':
        !tooMuchText && dispatch(zero(buttonName))
        break

      default:
        !tooMuchText && dispatch(provideInput(buttonName))
        break
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
