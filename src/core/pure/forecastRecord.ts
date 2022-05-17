import { ForecastRecord } from "../../api/getForecastForFiveDays"

export function getTemperatureFromForecasts(
  forecasts: ForecastRecord[]
): number[] {
  return forecasts.map(forecast => forecast.main.temp)
}

export function filterForecastByDateOffsets(
  forecasts: ForecastRecord[],
  fromDate: Date,
  untilDate: Date
): ForecastRecord[] {
  return forecasts.filter(
    forecast =>
      fromDate.getTime() / 1000 <= forecast.dt &&
      forecast.dt < untilDate.getTime() / 1000
  )
}

export function getDescriptionsFromForecasts(
  forecasts: ForecastRecord[]
): string[] {
  return forecasts.map((f: ForecastRecord) => f.weather[0].description)
}

export function getMainFromForecasts(forecasts: ForecastRecord[]): string[] {
  return forecasts.map((f: ForecastRecord) => f.weather[0].main)
}
