export const SET_VALUE = 'SET VALUE'
export const ADD_NUMBERS = 'ADD NUMBERS'

interface SetValue {
  type: 'SET VALUE'
  index: number
}

interface AddNumbers {
  type: 'ADD NUMBERS'
}

export type Actions = SetValue | AddNumbers

export const setValue = (index: number): SetValue => ({
  type: SET_VALUE,
  index
})

export const addNumbers = (): AddNumbers => ({
  type: ADD_NUMBERS
})
