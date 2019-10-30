import { Actions, GET_RESULT, PROVIDE_INPUT, ADD_A_NUMBER } from '../actions'

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
      return {
        ...state,
        displayed: 'result'
      }
    case ADD_A_NUMBER:
      return {
        ...state,
        displayed: 'addition'
      }

    default:
      return state
  }
}

export default mainReducer
