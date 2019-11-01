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
  tooMuch: boolean
  noSecPAr: boolean
}

const initialState: RootState = {
  displayed: '',
  done: false,
  usedPlus: false,
  zero: false,
  index: 0,
  tooMuch: false,
  noSecPAr: false
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    case INDEX_OF_A_CLICK:
      console.log('index of a click')
      return {
        ...state,
        index: state.index + 1
      }

    case PROVIDE_INPUT:
      console.log('provide input')
      const theFinalState =
        state.index < 12
          ? { ...state, displayed: state.displayed + action.digit }
          : { ...state, displayed: 'Too much!!!', tooMuch: true }

      return theFinalState

    case USED_PLUS:
      console.log('used plus')
      const anotherState = state.tooMuch
        ? { ...state, displayed: 'Too much!!!' }
        : {
            ...state,
            displayed: state.displayed + action.digit,
            usedPlus: true
          }
      return anotherState

    case ZERO:
      console.log('zero')
      const verifiedState =
        state.index === 0
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
      console.log('get result')
      const str = state.displayed
      const res = str && str.match(/\d+/g)
      const result = res && add(res[0], res[1])
      const finalResult = result && result.toString()
console.log('final result:'+ finalResult)
      const strTo = state.displayed
      const resTo = strTo && strTo.match(/\d+/g)
      const resultTo = resTo && resTo
      const finalResult2 = resultTo && resultTo.toString()
      const theFinalResult2 = finalResult2 && finalResult2
      const theFinal = theFinalResult2 ? theFinalResult2 : ''
console.log('the final :' + theFinal)

      const newState = state.usedPlus
        ? {
            ...state,
            displayed: finalResult ? finalResult : theFinal,
            done: false,
            usedPlus: false,
            index: 0
          }
        : {
            ...state,
            done: false,
           
          }

      return newState

    case RESET_RESULT:
    console.log('reset result: state.done:' + state.done)  
    const theNewState = state.done 
        ? { ...state, displayed: '' + action.digit, 
        done: false }
        : state

      return theNewState

    default:
      return state
  }
}

export default mainReducer
