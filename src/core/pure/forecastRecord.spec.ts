import { describe, expect, it } from "vitest"
import { incrementDate } from "./Date"
import { getTemperatureFromForecasts } from "./forecastRecord"

import { forecastRecordFixture } from "./forecastRecordFixture"

describe("Given: getTemperatureFromForecasts function", () => {
  it("When: we execute the function getTemperatureFromForecasts with a forecasts Array", () => {
    // then
    expect(
      getTemperatureFromForecasts(forecastRecordFixture.list)
    ).toHaveLength(forecastRecordFixture.list.length)

    expect(getTemperatureFromForecasts(forecastRecordFixture.list)[0]).toBe(
      forecastRecordFixture.list[0].main.temp
    )
  })
})
