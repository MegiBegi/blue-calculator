import * as actions from "redux/actions"

describe("actions", (): void => {
  it("should create an action to get the result", (): void => {
    const expectedAction = {
      type: actions.GET_RESULT
    }
    expect(actions.getResult()).toEqual(expectedAction)
  })
})

describe("actions", (): void => {
  it("should create an action to provide input", (): void => {
    const expectedAction = {
      type: actions.PROVIDE_INPUT,
      payload: {
        digit: 2
      }
    }
    expect(actions.provideInput(2)).toEqual(expectedAction)
  })
})

describe("actions", (): void => {
  it("should create an action that inserts pluses", (): void => {
    const expectedAction = {
      type: actions.USED_PLUS
    }
    expect(actions.usedPlus()).toEqual(expectedAction)
  })
})

describe("actions", (): void => {
  it("should create an action that inserts zeros", (): void => {
    const expectedAction = {
      type: actions.ZERO
    }
    expect(actions.zero()).toEqual(expectedAction)
  })
})

describe("actions", (): void => {
  it("should create an action that resets input", (): void => {
    const expectedAction = {
      type: actions.RESET
    }
    expect(actions.reset()).toEqual(expectedAction)
  })
})
