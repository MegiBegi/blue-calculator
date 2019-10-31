export const GET_RESULT = 'GET RESULT'
export const PROVIDE_INPUT = 'PROVIDE INPUT'
export const RESET_RESULT = 'RESET RESULT'

interface GetResult {
  type: 'GET RESULT'
}

interface ProvideInput {
  type: 'PROVIDE INPUT'
  digit: number
}

interface ResetResult {
  type: 'RESET RESULT'
  digit: number
}

export type Actions = GetResult | ProvideInput | ResetResult

export const getResult = (): GetResult => ({
  type: GET_RESULT
})

export const provideInput = (digit: number): ProvideInput => ({
  type: PROVIDE_INPUT,
  digit
})

export const resetResult = (digit: number): ResetResult => ({
  type: RESET_RESULT,
  digit
})
