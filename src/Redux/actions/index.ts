export const GET_RESULT = 'GET RESULT'
export const PROVIDE_INPUT = 'PROVIDE INPUT'
export const RESET_RESULT = 'RESET RESULT'
export const USED_PLUS = 'USED PLUS'
export const ZERO = 'ZERO'
export const INDEX_OF_A_CLICK = 'INDEX OF A CLICK'


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

interface UsedPlus {
  type: 'USED PLUS'
  digit: number
}

interface Zero {
  type: 'ZERO'
  digit: number
}

interface IndexOfAClick {
  type: 'INDEX OF A CLICK'
}


export type Actions = GetResult | ProvideInput | ResetResult | UsedPlus | Zero | IndexOfAClick

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

export const usedPlus = (digit: number): UsedPlus => ({
  type: USED_PLUS,
  digit
})

export const zero = (digit: number): Zero => ({
  type: ZERO,
  digit
})

export const indexOfAClick = (): IndexOfAClick => ({
         type: INDEX_OF_A_CLICK
       })
