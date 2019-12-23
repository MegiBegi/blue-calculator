import reducer, { initialState, RootState } from "./index"
import * as actions from "redux/actions"

describe("mainReducer", (): void => {
  let state: RootState = initialState

  beforeEach((): void => {
    state = initialState
  })

  it("checks PROVIDE_INPUT when currentInput.length < MAX_INPUT_LENGTH ", (): void => {
    expect(
      reducer(state, {
        type: actions.PROVIDE_INPUT,
        payload: {
          digit: 2
        }
      })
    ).toEqual({
      ...state,
      displayed: "2"
    })
  })

  it("checks PROVIDE_INPUT when currentInput.length >= MAX_INPUT_LENGTH ", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "99999999999"
        },
        {
          type: actions.PROVIDE_INPUT,
          payload: {
            digit: 2
          }
        }
      )
    ).toEqual({
      ...state,
      displayed: "Too much!!!",
      tooMuch: true
    })
  })

  it("checks USED_PLUS when displayed doesn't end with '+'", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "9"
        },
        {
          type: actions.USED_PLUS
        }
      )
    ).toEqual({
      ...state,
      displayed: "9+"
    })
  })

  it("checks USED_PLUS when state.displayed ends with '+'", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "9+"
        },
        {
          type: actions.USED_PLUS
        }
      )
    ).toEqual({
      ...state,
      displayed: "9+"
    })
  })
})
