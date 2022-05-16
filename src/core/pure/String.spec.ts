import { describe, expect, it } from "vitest"
import { zeroFill, capitalize } from "./String"

describe("Given: zeroFill function", () => {
  it("When: we execute the function zeroFill with a number below 10", () => {
    // then
    expect(zeroFill(3)).toBe("03")
    expect(zeroFill(1)).toBe("01")
    expect(zeroFill(9)).toBe("09")
  })
  it("When: we execute the function zeroFill with a number higher than 10", () => {
    // then
    expect(zeroFill(11)).toBe("11")
  })
})

describe("Given: capitalize function", () => {
  it("When: we execute the function capitalize with the 'test' param", () => {
    //then
    expect(capitalize("test")).toBe("Test")
  })
})
