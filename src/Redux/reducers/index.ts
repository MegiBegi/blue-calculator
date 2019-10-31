import { add } from 'ramda'
import { Actions, GET_RESULT, PROVIDE_INPUT } from '../actions'

export interface RootState {
  displayed: string | null
}

const initialState: RootState = {
  displayed: '0'
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    case PROVIDE_INPUT:
      return {
        ...state,
        displayed: state.displayed ? state.displayed + action.digit : ''
      }
    case GET_RESULT:
      const str = state.displayed
      const res = str && str.match(/\d+/g)
      const result = res && add(res[0], res[1])
      const finalResult = result && result.toString()
      return {
        ...state,
        displayed: finalResult
      }

    default:
      return state
  }
}

export default mainReducer
