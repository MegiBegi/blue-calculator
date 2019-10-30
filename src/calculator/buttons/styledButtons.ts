import styled from 'styled-components'

interface ButtonProps {
  name: string
  sign: number
}

const StyledButton = styled.button<ButtonProps>`
  font-size: 36px;
  color: #ffffff;
  font-family: 'Nothing You Could Do';
  font-weight: 400;
  background-color: #a91548;
  height: 64px;
  width: 64px;
  line-height: 64px;
  border-radius: 50%;
  margin-bottom: 24.3px;
  margin-right: 26px;
`

export default StyledButton
