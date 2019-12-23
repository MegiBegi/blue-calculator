import React, { FC } from "react"
import { connect } from "react-redux"
import { includes, endsWith } from "ramda"
import { noop } from "ramda-adjunct"
import * as actions from "redux/actions"
import { RootState } from "redux/reducers"
import Buttons from "calculator/buttons"
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  ButtonsWrapper,
  ScoreInputWrapper,
  ResetButton
} from "calculator/styledCalculator"

type Noop = () => void

interface CalculatorStateProps {
  currentValue: string
  tooMuchText: boolean
}

type CalculatorProps = CalculatorStateProps & DispatchProps

const Calculator: FC<CalculatorProps> = ({
  currentValue,
  tooMuchText,
  getResult,
  provideInput,
  usedPlus,
  zero,
  reset
}) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    // @ts-ignore
    const buttonName = event.target.name
    const includesPlus = includes("+", currentValue)
    const endsWithAPlus = endsWith("+", currentValue)
    switch (buttonName) {
      case "=":
        !tooMuchText && includesPlus && getResult()
        break

      case "+":
        !tooMuchText && !endsWithAPlus && currentValue.length > 0 && usedPlus()
        includesPlus && !endsWithAPlus && getResult()
        break

      case "0":
        !tooMuchText && zero()
        break

      default:
        !tooMuchText && provideInput(buttonName)
        break
    }
  }

  return (
    <PageContainer>
      <ResetButton onClick={reset}>Reset</ResetButton>
      <StyledCalculator>
        <ScoreInputWrapper>
          <ScoreInput
            name="Score input"
            id="Score input"
            type="text"
            value={currentValue ?? ""}
            onChange={noop}
            placeholder="0"
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
  tooMuchText: state.tooMuch
})

interface DispatchProps {
  getResult: Noop
  provideInput: (digit: string) => void
  usedPlus: Noop
  zero: Noop
  reset: Noop
}

const mapDispatchToProps: DispatchProps = {
  getResult: actions.getResult,
  provideInput: actions.provideInput,
  usedPlus: actions.usedPlus,
  zero: actions.zero,
  reset: actions.reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
