import React from 'react'
import Button from './styledButtons'

const names = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+', '0', '=']

export const buttonsList = names.map((name, index) => {
  return {
    name,
    id: index
  }
})

const fullList = buttonsList.map((name, id) => {
  return (
    <Button name={name} id={id}>
      dsdsd
    </Button>
  )
})

export default fullList
