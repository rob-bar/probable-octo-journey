import { describe, expect, it } from "vitest"
import { average, mode } from "./Array"

describe("Given: average function", () => {
  it("When: we execute the function average with [5,6,7,8] as param", () => {
    // then
    expect(average([5, 6, 7, 8])).toBe(6.5)
  })
})

describe("Given: mode function", () => {
  it("When: we execute the function mode with ['a', 'b', 'b', 'c']", () => {
    //then
    expect(mode(["a", "b", "b", "c"])).toBe("b")
  })
})
