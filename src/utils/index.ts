import { findIndex, join } from "ramda"

export const getSum = (input: string): number => {
  const firstNum: string[] = []
  const secondNum: string[] = []

  const elementsArr: string[] = input.split("")
  const plusInd = findIndex((el: string): boolean => el === "+", elementsArr)

  elementsArr.forEach((el: string, index: number): void => {
    if (index < plusInd) firstNum.push(el)
    if (index > plusInd) secondNum.push(el)
  })

  return Number(join("", firstNum)) + Number(join("", secondNum))
}
