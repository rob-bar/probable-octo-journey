import { API_URL, key } from "../Constants"

export type ForecastResponse = any

export const getForecast = async (): Promise<ForecastResponse> => {
  const city = "Oslo"

  return await fetch(`${API_URL}/forecast?q=${city}&appid=${key}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => data)
}
