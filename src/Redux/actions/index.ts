export const SET_VALUE = 'SET VALUE'

interface SetValue {
  type: 'SET VALUE'
}

export type Actions = SetValue

export const setValue = (): SetValue => ({
  type: SET_VALUE
})
