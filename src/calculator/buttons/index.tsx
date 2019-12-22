import React, { FC } from "react"
import Button from "calculator/buttons/styledButtons"

interface ButtonType {
  name: string
  id: number
}

const names = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "+", "0", "="]

export const buttonsList = names.map((name, index) => {
  return {
    name,
    id: index
  }
})

interface FullListProps {
  onButtonClick: any
}

const FullList: FC<FullListProps> = ({ onButtonClick }) => {
  const buttonsTab = buttonsList.map((button: ButtonType) => {
    return (
      <Button
        name={button.name}
        sign={button.id}
        key={button.id}
        onClick={onButtonClick}
      >
        {button.name}
      </Button>
    )
  })

  return <>{buttonsTab}</>
}

export default FullList
