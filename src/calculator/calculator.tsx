import React, { FC, ReactElement } from 'react'
import { connect } from 'react-redux'
import { equals } from 'ramda'
import {
  getResult,
  provideInput,
  resetResult,
  usedPlus
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
}

interface CalculatorProps extends CalculatorStateProps {}

const Calculator: FC<CalculatorProps> = ({ currentValue }): ReactElement => {
  const handleClick = (event: any): void => {
    const buttonName = event.target.name
    if (equals(buttonName, '=')) {
      dispatch(getResult())
    } else if (equals(buttonName, '+')) {
      dispatch(usedPlus(buttonName))
    } else {
      dispatch(provideInput(buttonName))
    }
    if (!equals(buttonName, '+') && !equals(buttonName, '=')) {
      dispatch(resetResult(buttonName))
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
  currentValue: state.displayed
})

export default connect<any, any, any, any>(
  mapStateToProps,
  null
)(Calculator)
