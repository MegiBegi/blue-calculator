import { findIndex, join } from "ramda"
import styled from "styled-components"

export const getSum = (input: string): number => {
  const firstNum: string[] = []
  const secondNum: string[] = []
  const elementsArr: string[] = input.split("")
  const pluses: string[] = []
  const reducedArray: string[] = []

  elementsArr.forEach((el: string): void => {
    el === "+" && pluses.push(el)
  })

  pluses.length > 1 &&
    elementsArr.forEach((el: string, index: number): void => {
      if (index < elementsArr.length - 2) reducedArray.push(el)
    })

  const plusInd = findIndex(
    (el: string): boolean => el === "+",
    pluses.length > 1 ? reducedArray : elementsArr
  )

  let currentArray: string[]
  pluses.length > 1
    ? (currentArray = reducedArray)
    : (currentArray = elementsArr)

  currentArray.forEach((el: string, index: number): void => {
    if (index < plusInd) firstNum.push(el)
    if (index > plusInd) secondNum.push(el)
  })

  return Number(join("", firstNum)) + Number(join("", secondNum))
}

export const LoaderWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  [class*="loader-inner"] {
    div:nth-child(odd) {
      background-color: #a91548;
    }

    div:nth-child(even) {
      background: #0095b8;
    }
  }
`
