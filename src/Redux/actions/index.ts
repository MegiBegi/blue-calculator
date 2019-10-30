export const GET_RESULT = 'GET RESULT'
export const PROVIDE_INPUT = 'PROVIDE INPUT'

interface GetResult {
  type: 'GET RESULT'
}

interface ProvideInput {
  type: 'PROVIDE INPUT'
  digit: number
}

export type Actions = GetResult | ProvideInput

export const getResult = (): GetResult => ({
  type: GET_RESULT
})

export const provideInput = (digit: number): ProvideInput => ({
  type: PROVIDE_INPUT,
  digit
})
