import { includes, endsWith } from "ramda"
import {
  Actions,
  GET_RESULT,
  PROVIDE_INPUT,
  USED_PLUS,
  ZERO,
  RESET
} from "redux/actions"
import { getSum } from "utils"

export interface RootState {
  displayed: string
  tooMuch: boolean
  plusCheck: number
}

export const initialState: RootState = {
  displayed: "",
  tooMuch: false,
  plusCheck: 0
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  const { displayed } = state
  const MAX_INPUT_LENGTH = 11
  switch (action.type) {
    case PROVIDE_INPUT:
      const currentInput = displayed
      const theFinalState =
        currentInput.length < MAX_INPUT_LENGTH
          ? { ...state, displayed: displayed + action.payload.digit }
          : { ...state, displayed: "Too much!!!", tooMuch: true }

      return theFinalState

    case USED_PLUS:
      const theCurrentState = displayed
      const properScenario = {
        ...state,
        displayed: displayed + "+"
      }
      const plusesOverload = endsWith("+", theCurrentState)
        ? state
        : properScenario
      return plusesOverload

    case ZERO:
      const currentState = displayed
      const verifiedState = includes(currentState, "0")
        ? state
        : {
            ...state,
            displayed: displayed + "0",
            zero: true
          }

      return verifiedState

    case GET_RESULT:
      const myState = displayed
      const addZero = myState + "0"
      const digits = endsWith("+", myState) ? addZero : myState
      const result = getSum(digits).toString()
      return {
        ...state,
        displayed: result,
        plusCheck: 0
      }
    case RESET:
      return initialState
    default:
      return state
  }
}

export default mainReducer
