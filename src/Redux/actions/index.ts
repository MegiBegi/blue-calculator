export const GET_RESULT = 'GET RESULT'
export const PROVIDE_INPUT = 'PROVIDE INPUT'
export const USED_PLUS = 'USED PLUS'
export const ZERO = 'ZERO'
export const RESET = 'RESET'


interface GetResult {
  type: 'GET RESULT'
}

interface ProvideInput {
  type: 'PROVIDE INPUT'
  digit: number
}

interface UsedPlus {
  type: 'USED PLUS'
  digit: number
}

interface Zero {
  type: 'ZERO'
  digit: number
}

interface Reset {
  type: 'RESET'
}

export type Actions = GetResult | ProvideInput | UsedPlus | Zero | Reset

export const getResult = (): GetResult => ({
  type: GET_RESULT
})

export const provideInput = (digit: number): ProvideInput => ({
  type: PROVIDE_INPUT,
  digit
})

export const usedPlus = (digit: number): UsedPlus => ({
  type: USED_PLUS,
  digit
})

export const zero = (digit: number): Zero => ({
  type: ZERO,
  digit
})

export const reset = (): Reset => ({
  type: RESET
})

