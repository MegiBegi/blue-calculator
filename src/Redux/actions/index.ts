export const GET_RESULT = "GET RESULT"
export const PROVIDE_INPUT = "PROVIDE INPUT"
export const USED_PLUS = "USED PLUS"
export const ZERO = "ZERO"
export const RESET = "RESET"

interface GetResult {
  type: "GET RESULT"
}

interface ProvideInput {
  type: "PROVIDE INPUT"
  payload: {
    digit: string
  }
}

interface UsedPlus {
  type: "USED PLUS"
}

interface Zero {
  type: "ZERO"
}

interface Reset {
  type: "RESET"
}

export type Actions = GetResult | ProvideInput | UsedPlus | Zero | Reset

export const getResult = (): GetResult => ({
  type: GET_RESULT
})

export const provideInput = (digit: string): ProvideInput => ({
  type: PROVIDE_INPUT,
  payload: {
    digit
  }
})

export const usedPlus = (): UsedPlus => ({
  type: USED_PLUS
})

export const zero = (): Zero => ({
  type: ZERO
})

export const reset = (): Reset => ({
  type: RESET
})
