import reducer, { initialState, RootState } from "./index"
import * as actions from "redux/actions"

describe("mainReducer", (): void => {
  let state: RootState = initialState

  const actionNoop = { type: "NOOP" }

  beforeEach((): void => {
    state = initialState
  })

  it("has a default state", () => {
    // @ts-ignore
    expect(reducer(undefined, actionNoop)).toEqual(state)
  })

  it("returns the initial state", () => {
    // @ts-ignore
    expect(reducer(state, actionNoop)).toEqual(state)
  })
  it("stops insertion when 0 is the first digit of a number ", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "3+0"
        },
        {
          type: actions.PROVIDE_INPUT,
          payload: {
            digit: "2"
          }
        }
      )
    ).toEqual({
      ...state,
      displayed: "3+0"
    })
  })

  it("checks PROVIDE_INPUT when displayed.length < MAX_INPUT_LENGTH ", (): void => {
    expect(
      reducer(state, {
        type: actions.PROVIDE_INPUT,
        payload: {
          digit: "2"
        }
      })
    ).toEqual({
      ...state,
      displayed: "2"
    })
  })

  it("checks PROVIDE_INPUT when displayed.length >= MAX_INPUT_LENGTH ", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "99999999999"
        },
        {
          type: actions.PROVIDE_INPUT,
          payload: {
            digit: "2"
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

  it("checks USED_PLUS when displayed ends with '+'", (): void => {
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

  it("checks ZERO when displayed.length >= MAX_INPUT_LENGTH ", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "99999999999"
        },
        {
          type: actions.ZERO
        }
      )
    ).toEqual({
      ...state,
      displayed: "Too much!!!",
      tooMuch: true
    })
  })

  it("checks ZERO when displayed.length < MAX_INPUT_LENGTH and avoid multiply zeros is false", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "10+20"
        },
        {
          type: actions.ZERO
        }
      )
    ).toEqual({
      ...state,
      displayed: "10+200"
    })
  })

  it("checks ZERO when displayed.length < MAX_INPUT_LENGTH and avoid multiply zeros is true", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "10+0"
        },
        {
          type: actions.ZERO
        }
      )
    ).toEqual({
      ...state,
      displayed: "10+0"
    })
  })

  it("checks GET_RESULT when displayed ends with a '+'", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "10+9+"
        },
        {
          type: actions.GET_RESULT
        }
      )
    ).toEqual({
      ...state,
      displayed: "19"
    })
  })

  it("checks GET_RESULT when displayed doesn't end with a '+'", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "10+9"
        },
        {
          type: actions.GET_RESULT
        }
      )
    ).toEqual({
      ...state,
      displayed: "19"
    })
  })
  it("fires RESET when reset button is clicked", (): void => {
    expect(
      reducer(
        {
          ...state,
          displayed: "10+9"
        },
        {
          type: actions.RESET
        }
      )
    ).toEqual({
      displayed: "",
      tooMuch: false
    })
  })
})
