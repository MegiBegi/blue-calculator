import React, { ReactElement, FC } from "react"
import Calculator from "../calculator/calculator"
import { GlobalStyles } from "./styles"

const App: FC = (): ReactElement => (
  <>
    <GlobalStyles />
    <Calculator />
  </>
)

export default App
