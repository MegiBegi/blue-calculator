import { Actions, GET_RESULT, PROVIDE_INPUT } from '../actions'

export interface RootState {
  displayed: string
}

const initialState: RootState = {
  displayed: ''
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
      const res = str.match(/\d+/g)
      console.log(res)

      return {
        ...state,
        displayed: 'result'
      }

    default:
      return state
  }
}

export default mainReducer
