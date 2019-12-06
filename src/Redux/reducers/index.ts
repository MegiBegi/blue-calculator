import { includes, endsWith } from "ramda"
import {
  Actions,
  GET_RESULT,
  PROVIDE_INPUT,
  USED_PLUS,
  ZERO,
  RESET
} from "../actions"

export interface RootState {
  displayed: string
  tooMuch: boolean
  plusCheck: number
}

const initialState: RootState = {
  displayed: "",
  tooMuch: false,
  plusCheck: 0
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  const { displayed } = state
  switch (action.type) {
    case PROVIDE_INPUT:
      const currentInput = displayed
      const theFinalState =
        currentInput.length < 11
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
      const myBetterState = myState + "0"
      const whatIsTheState = endsWith("+", myState) ? myBetterState : myState
      const result = eval(whatIsTheState)
      const displayedResult = result.toString()
      return {
        ...state,
        displayed: displayedResult,
        plusCheck: 0
      }
    case RESET:
      return initialState
    default:
      return state
  }
}

export default mainReducer
