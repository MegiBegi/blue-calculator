import React, { FC } from "react"
import Button from "calculator/buttons/styledButtons"

interface ButtonType {
  name: string
  id: number
}

const names = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "+", "0", "="]

export const buttonsList = names.map((name, index) => ({
  name,
  id: index
}))

interface FullListProps {
  onButtonClick: (event: React.MouseEvent<HTMLElement>) => void
}

const Buttons: FC<FullListProps> = ({ onButtonClick }) => (
  <>
    {buttonsList.map((button: ButtonType) => (
      <Button
        name={button.name}
        sign={button.id}
        key={button.id}
        onClick={onButtonClick}
      >
        {button.name}
      </Button>
    ))}
  </>
)

export default Buttons
