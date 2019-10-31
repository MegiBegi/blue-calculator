import { add } from 'ramda'
import {
  Actions,
  GET_RESULT,
  PROVIDE_INPUT,
  RESET_RESULT,
  USED_PLUS
} from '../actions'

export interface RootState {
  displayed: string
  done: boolean
  usedPlus: boolean
}

const initialState: RootState = {
  displayed: '',
  done: false,
  usedPlus: false
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
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

    case GET_RESULT:
      const str = state.displayed
      const res = str && str.match(/\d+/g)
      const result = res && add(res[0], res[1])
      const finalResult = result && result.toString()
      const finalString = finalResult ? finalResult : ''

      const newState = state.usedPlus ? {
        ...state,
        displayed: finalString,
        done: true,
        usedPlus: false
      } : state
      
    return newState

    case RESET_RESULT:
      if (state.done)
        return {
          ...state,
          displayed: '' + action.digit,
          done: false
        }

    default:
      return state
  }
}

export default mainReducer
