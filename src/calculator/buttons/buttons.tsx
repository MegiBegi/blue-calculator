import React, { ReactElement, FC } from 'react'
import Button from './styledButtons'

interface Button {
  name: string
  id: number
}

const names = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+', '0', '=']

export const buttonsList = names.map((name, index) => {
  return {
    name,
    id: index
  }
})

const FullList: FC = (): ReactElement => {
  const buttonsTab = buttonsList.map(
    (button: Button): ReactElement => {
      return (
        <Button name={button.name} sign={button.id} key={button.id}>
          {button.name}
        </Button>
      )
    }
  )

  return <>{buttonsTab}</>
}

const Buttons: FC = (): ReactElement => {
  return <FullList />
}

export default Buttons
