import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const StyledCalculator = styled.div`
  width: 300px;
  height: 506px;
  border-radius: 10px;
  background-color: #0095b8;
  padding: 0;
`
export const ScoreInputWrapper = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: center;
`

export const ScoreInput = styled.input`
  width: 249px;
  height: 63px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 30px;
  font-size: 36px;
  font-family: 'Nothing You Could Do';
  text-indent: 20px;
  line-height: 63px;
`

export const ButtonsWrapper = styled.div`
  height: 329px;
  width: 244px;
  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 38px;
  padding-top: 42px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`
