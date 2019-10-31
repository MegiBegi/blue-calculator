import { add } from 'ramda'
import { Actions, GET_RESULT, PROVIDE_INPUT, RESET_RESULT } from '../actions'

export interface RootState {
  displayed: string
  done: boolean
}

const initialState: RootState = {
  displayed: '',
  done: false
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    case PROVIDE_INPUT:
      return {
        ...state,
        displayed: state.displayed + action.digit
      }
    case GET_RESULT:
      const str = state.displayed
      const res = str && str.match(/\d+/g)
      const result = res && add(res[0], res[1])
      const finalResult = result && result.toString()
      const finalString = finalResult ? finalResult : ''
      console.log(finalResult)
      return {
        ...state,
        displayed: finalString,
        done: true
      }
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
