export const GET_RESULT = 'GET RESULT'
export const PROVIDE_INPUT = 'PROVIDE INPUT'
export const ADD_A_NUMBER = 'ADD A NUMBER'

interface GetResult {
  type: 'GET RESULT'
}

interface ProvideInput {
  type: 'PROVIDE INPUT'
  digit: number
}

interface AddANumber {
  type: 'ADD A NUMBER'
}

export type Actions = GetResult | ProvideInput | AddANumber

export const getResult = (): GetResult => ({
  type: GET_RESULT
})

export const provideInput = (digit: number): ProvideInput => ({
  type: PROVIDE_INPUT,
  digit
})

export const addANumber = (): AddANumber => ({
  type: ADD_A_NUMBER
})
