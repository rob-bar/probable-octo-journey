import { Units } from "../core/Config"
import { City, MainInformation, WeatherForecast, Wind } from "../global"
import { API_URL, API_KEY } from "./Constants"

export type ForecastRecord = {
  clouds: { all: number }
  dt: number
  dt_txt: string
  main: MainInformation
  pop: number
  sys: { prod: string }
  visibility: number
  weather: WeatherForecast[]
  wind: Wind
}

export type ForecastResponse = {
  city: City
  cnt: number
  code: string
  list: ForecastRecord[]
  message: number
}

export const getForecastForFiveDays = async (
  unit: Units,
  city: string
): Promise<ForecastResponse> => {
  const res = await fetch(
    `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
  )

  if (!res.ok) throw `Please Perform a correct call to the api: ${API_URL}`

  // We want to make it obvious for the reader of the code that this response is readonly
  return await Object.freeze(res.json())
}
