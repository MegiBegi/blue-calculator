import { add, includes } from 'ramda'
import {
  Actions,
  GET_RESULT,
  PROVIDE_INPUT,
  USED_PLUS,
  ZERO,
} from '../actions'

export interface RootState {
  displayed: string
    usedPlus: boolean
  zero: boolean
  
  tooMuch: boolean
  noSecPAr: boolean
  plusCheck: boolean
}

const initialState: RootState = {
  displayed: '',
  usedPlus: false,
  zero: false,
  
  tooMuch: false,
  noSecPAr: false,
  plusCheck: false
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    
    case PROVIDE_INPUT:
      console.log('provide input')
      const currentInput = state.displayed
      const theFinalState =
        currentInput.length < 11
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
           
          }

          const tooManyPluses = includes('+', state.displayed) 
          ? state:
          anotherState

          const theCurrentState = state.displayed
          const isPlusFirst = includes('', theCurrentState)
          ? state:
          tooManyPluses 

      return isPlusFirst

    case ZERO:
      console.log('zero')
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
      console.log('get result')
      const str = state.displayed
      const res = str && str.match(/\d+/g)
      const result = res && add(res[0], res[1])
      const finalResult = result && result.toString()
console.log('final result:'+ finalResult)
      const strTo = state.displayed
      const resTo = strTo && strTo.match(/\d+/g)
      const resultTo = resTo && resTo
      const finalResultTo = resultTo && resultTo.toString()
      const theFinalResultTo = finalResultTo && finalResultTo
      const theFinal = theFinalResultTo ? theFinalResultTo : ''
console.log('the final :' + theFinal)

    

      return {
            ...state,
            displayed: finalResult ? finalResult : theFinal,
            usedPlus: false,
            index: 0
          }

    default:
      return state
  }
}

export default mainReducer
