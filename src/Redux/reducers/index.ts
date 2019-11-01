import { add } from 'ramda'
import {
  Actions,
  GET_RESULT,
  PROVIDE_INPUT,
  RESET_RESULT,
  USED_PLUS,
  ZERO,
  INDEX_OF_A_CLICK
} from '../actions'

export interface RootState {
  displayed: string
  done: boolean
  usedPlus: boolean
  zero: boolean
  index: number
}

const initialState: RootState = {
  displayed: '',
  done: false,
  usedPlus: false,
  zero: false,
  index: 0
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    case INDEX_OF_A_CLICK:
      return {
        ...state,
index: state.index + 1
      }
    
    case PROVIDE_INPUT:
      return {
        ...state,
        displayed: state.displayed + action.digit
      }

    case USED_PLUS: 
    return {
        ...state,
        displayed: state.displayed + action.digit,
        usedPlus: true
      }

    case ZERO:
    const verifiedState =
      state.index === 0
        ? state
        : {
            ...state,
            displayed: state.displayed + action.digit,
            zero: true
          }
    return verifiedState

    case GET_RESULT:
      const str = state.displayed
      const res = str && str.match(/\d+/g)
      const result = res && add(res[0], res[1])
      const finalResult = result && result.toString()
      const finalString = finalResult ? finalResult : ''
console.log(finalResult)
      const newState = state.usedPlus
        ? {
            ...state,
            displayed: finalString,
            done: true,
            usedPlus: false,
            index: 0
          }
        : state

      return newState

    case RESET_RESULT:
      const theNewState = state.done 
        ? {...state,
          displayed: '' + action.digit,
           done: false
          } 
        : state

return theNewState

    default:
      return state
  }
}

export default mainReducer
