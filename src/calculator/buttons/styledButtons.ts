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
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  :hover {
    -webkit-box-shadow: 0px 0px 2px 4px rgba(255, 255, 255, 0.77);
    -moz-box-shadow: 0px 0px 2px 4px rgba(255, 255, 255, 0.77);
    box-shadow: 0px 0px 2px 4px rgba(255, 255, 255, 0.77);
  }
  :active {
    background-color: #660c2b;
  }
`

export default StyledButton
