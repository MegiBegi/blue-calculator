import React, { FC, ReactElement } from 'react'
import { connect } from 'react-redux'
import { equals, includes, endsWith } from 'ramda'
import { getResult, provideInput, usedPlus, zero } from '../Redux/actions'
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
  currentValue: string
  checkingRenderOnPlus: number
  tooMuchText: boolean
}

interface CalculatorProps extends CalculatorStateProps {}

const Calculator: FC<CalculatorProps> = ({
  currentValue,
  //checkingRenderOnPlus,
  tooMuchText
}): ReactElement => {
  const handleClick = (event: any): void => {
    const buttonName = event.target.name
    const includesPlus = includes('+', currentValue)
    console.log('includesPlus' + includesPlus)
    const endsWithAPlus = endsWith('+', currentValue)
console.log('endsWithAPlus' + endsWithAPlus)
    if (equals(buttonName, '=') && !tooMuchText) {
      dispatch(getResult())
    } else if (equals(buttonName, '+') && !tooMuchText) {
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
