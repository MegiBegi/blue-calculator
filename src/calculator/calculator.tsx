import React, { FC, ReactElement } from "react"
import { connect } from "react-redux"
import { includes, endsWith } from "ramda"
import { noop } from "ramda-adjunct"
import {
  getResult,
  provideInput,
  usedPlus,
  zero,
  reset
} from "../Redux/actions"
import { RootState } from "../Redux/reducers"
import Buttons from "./buttons/buttons"
import {
  PageContainer,
  ScoreInput,
  StyledCalculator,
  ButtonsWrapper,
  ScoreInputWrapper,
  ResetButton
} from "./styledCalculator"

interface CalculatorStateProps {
  currentValue: string
  checkingRenderOnPlus: number
  tooMuchText: boolean
}

interface CalculatorProps extends CalculatorStateProps {}
interface CalculatorProps extends DispatchProps {}

const Calculator: FC<CalculatorProps> = ({
  currentValue,
  tooMuchText,
  getResult,
  provideInput,
  usedPlus,
  zero,
  reset
}): ReactElement => {
  const handleClick = (event: any): void => {
    const buttonName = event.target.name
    const includesPlus = includes("+", currentValue)
    const endsWithAPlus = endsWith("+", currentValue)

    switch (buttonName) {
      case "=":
        !tooMuchText && includesPlus && getResult()
        break

      case "+":
        !tooMuchText && !endsWithAPlus && usedPlus()
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

  const handleReset = (): void => {
    reset()
  }

  return (
    <PageContainer>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
      <StyledCalculator>
        <ScoreInputWrapper>
          <ScoreInput
            type="text"
            value={currentValue || ""}
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
  checkingRenderOnPlus: state.plusCheck,
  tooMuchText: state.tooMuch
})

interface DispatchProps {
  getResult: () => void
  provideInput: (digit: number) => void
  usedPlus: () => void
  zero: () => void
  reset: () => void
}

const mapDispatchToProps: DispatchProps = {
  getResult: getResult,
  provideInput: provideInput,
  usedPlus: usedPlus,
  zero: zero,
  reset: reset
}

export default connect<any, any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)
