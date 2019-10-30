import { Actions, SET_VALUE } from '../actions'

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
        value: state.value++
      }
    default:
      return state
  }
}

export default mainReducer
