import { describe, expect, it } from "vitest"
import { incrementDate } from "./Date"

describe("Given: incrementDate function", () => {
  const date = new Date(2022, 6, 16)
  it("When: we execute the function mode with a date 16/05/2022 and add one up", () => {
    //then
    expect(incrementDate(date, 1).toString()).toBe(
      new Date(2022, 6, 17).toString()
    )
  })

  it("When: we execute the function mode with a date 16/05/2022 and subtract three", () => {
    //then
    expect(incrementDate(date, -3).toString()).toBe(
      new Date(2022, 6, 13).toString()
    )
  })
})
