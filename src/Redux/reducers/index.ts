import { includes,  } from 'ramda'
import {
  Actions,
  GET_RESULT,
  PROVIDE_INPUT,
  USED_PLUS,
  ZERO,
} from '../actions'

export interface RootState {
  displayed: string
   
  zero: boolean
  
  tooMuch: boolean
  noSecPAr: boolean
  plusCheck: boolean
}

const initialState: RootState = {
  displayed: '',
  zero: false,
  
  tooMuch: false,
  noSecPAr: false,
  plusCheck: false
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    
    case PROVIDE_INPUT:
      const currentInput = state.displayed
      const theFinalState =
        currentInput.length < 11
          ? { ...state, displayed: state.displayed + action.digit }
          : { ...state, displayed: 'Too much!!!', tooMuch: true }

      return theFinalState

    case USED_PLUS:
    



      return { ...state, displayed: state.displayed + action.digit }

    case ZERO:
      const currentState = state.displayed
      const verifiedState = includes(currentState, '0')
        ? state
        : {
            ...state,
            displayed: state.displayed + action.digit,
            zero: true
          }
      const whatIsDisplayed = state.tooMuch
        ? { ...state, displayed: 'Too much!!!' }
        : verifiedState
      return whatIsDisplayed

    case GET_RESULT:
    const myState = state.displayed 
    const result = eval(myState)
    console.log('result:' + result)
    const displayedResult = result.toString()
      return {
        ...state,
        displayed: displayedResult,
        index: 0
      }

    default:
      return state
  }
}

export default mainReducer
