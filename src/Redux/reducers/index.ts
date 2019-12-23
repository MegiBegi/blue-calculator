import { endsWith, split, includes } from "ramda"
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
}

export const initialState: RootState = {
  displayed: "",
  tooMuch: false
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  const { displayed } = state
  const tooMuch = {
    ...state,
    displayed: "Too much!!!",
    tooMuch: true
  }
  const MAX_INPUT_LENGTH = 11
  switch (action.type) {
    case PROVIDE_INPUT:
      if (displayed === "0") return state
      const theFinalState =
        displayed.length < MAX_INPUT_LENGTH
          ? { ...state, displayed: displayed + action.payload.digit }
          : tooMuch

      return theFinalState

    case USED_PLUS:
      const properScenario = {
        ...state,
        displayed: displayed + "+"
      }
      const plusesOverload = endsWith("+", displayed) ? state : properScenario
      return plusesOverload

    case ZERO:
      const verifiedState =
        includes("+", displayed) && split("+", displayed)[1].startsWith("0")
          ? state
          : {
              ...state,
              displayed: displayed + "0"
            }
      const updatedState =
        displayed.length > MAX_INPUT_LENGTH ? tooMuch : verifiedState
      return updatedState

    case GET_RESULT:
      const addZero = displayed + "0"
      const digits = endsWith("+", displayed) ? addZero : displayed
      const result = getSum(digits).toString()
      return {
        ...state,
        displayed: result
      }
    case RESET:
      return initialState
    default:
      return state
  }
}

export default mainReducer
