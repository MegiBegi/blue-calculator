import React, { FC, ReactElement } from 'react'
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  ButtonsWrapper,
  ScoreInputWrapper
} from './styledCalculator'
import Buttons from './buttons/buttons'
import { getResult, provideInput } from '../Redux/actions'
import { dispatch } from '../Redux/store'
import { RootState } from '../Redux/reducers'
import { connect } from 'react-redux'

interface CalculatorStateProps {
  currentValue: string | null
}

interface CalculatorProps extends CalculatorStateProps {}

const Calculator: FC<CalculatorProps> = ({ currentValue }): ReactElement => {
  const handleClick = (event: any): void => {
    const buttonName = event.target.name
    if (buttonName === '=') {
      dispatch(getResult())
    } else {
      dispatch(provideInput(buttonName))
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
