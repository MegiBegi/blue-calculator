import React, { FC, ReactElement } from 'react'
import { connect } from 'react-redux'
import { equals } from 'ramda'
import {
  getResult,
  provideInput,
  usedPlus,
  zero
} from '../Redux/actions'
import { dispatch } from '../Redux/store'
import { RootState } from '../Redux/reducers'
import Buttons from './buttons/buttons'
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  ButtonsWrapper,
  ScoreInputWrapper
} from './styledCalculator'

interface CalculatorStateProps {
  currentValue: string | null
  checkingRenderOnPlus: number
  tooMuchText: boolean
}

interface CalculatorProps extends CalculatorStateProps {}

const Calculator: FC<CalculatorProps> = ({
  currentValue,
  checkingRenderOnPlus,
  tooMuchText
}): ReactElement => {
  const handleClick = (event: any): void => {
    const buttonName = event.target.name
    if ((equals(buttonName, '=')) && !tooMuchText) {
      dispatch(getResult())
    } else if (equals(buttonName, '+') && !tooMuchText) {
             dispatch(usedPlus(buttonName))
           } else if (equals(buttonName, '0') && !tooMuchText) {
             dispatch(zero(buttonName))
           } else if (!tooMuchText) {
             dispatch(provideInput(buttonName))
           }
    if (equals(buttonName, '+') && checkingRenderOnPlus >= 1) {
      dispatch(getResult())
    }
  }

  return (
    <PageContainer>
      <StyledCalculator>
        <ScoreInputWrapper>
          <ScoreInput
            type='text'
            value={currentValue || ''}
            onChange={() => 'yabadabadoo'}
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
