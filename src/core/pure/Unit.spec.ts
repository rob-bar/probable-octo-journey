import { describe, expect, it } from "vitest"
import { Units } from "../Config"
import { getUnitAbbreviation } from "./Unit"

describe("Given: getUnitAbbreviation function", () => {
  it("When: we execute the function getUnitAbbreviation with all the Units params", () => {
    //then
    expect(getUnitAbbreviation(Units.METRIC)).toBe("°")
    expect(getUnitAbbreviation(Units.STANDARD)).toBe("K")
  })
})
