import React, { ReactElement, FC } from "react"
import Calculator from "calculator"
import { GlobalStyles } from "app/styles"

const App: FC = (): ReactElement => (
  <>
    <GlobalStyles />
    <Calculator />
  </>
)

export default App
