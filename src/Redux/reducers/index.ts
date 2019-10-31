import { add } from 'ramda'
import { Actions, GET_RESULT, PROVIDE_INPUT } from '../actions'

export interface RootState {
  displayed: string | null
  result: string
}

const initialState: RootState = {
  displayed: '',
  result: '0'
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    case PROVIDE_INPUT:
      return {
        ...state,
        result: state.displayed ? state.displayed + action.digit : '',
        displayed: state.result ? state.result : '0'
      }
    case GET_RESULT:
      const str = state.displayed
      const res = str && str.match(/\d+/g)
      const result = res && add(res[0], res[1])
      const finalResult = result && result.toString()
      return {
        ...state,
        result: finalResult ? finalResult : '0',
        displayed: state.result ? state.result : '0'
      }

    default:
      return state
  }
}

export default mainReducer
