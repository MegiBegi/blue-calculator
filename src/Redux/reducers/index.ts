import { Actions, SET_VALUE, ADD_NUMBERS } from '../actions'

export interface RootState {
  value: number
}

const initialState: RootState = {
  value: 0
}

const mainReducer = (state: RootState = initialState, action: Actions) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: state.value + action.index
      }
    case ADD_NUMBERS:
      return {
        ...state,
        value: state.value + 10
      }
    default:
      return state
  }
}

export default mainReducer
