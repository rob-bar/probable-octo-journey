import { useEffect, useState } from "react"
import {
  getForecastForFiveDays,
  ForecastResponse,
} from "./api/getForecastForFiveDays"
import { LoadingPage } from "./pages/Loading"
import { ForecastPage } from "./pages/Forecast"
import { Config } from "./core/Config"

export const ForecastProvider = (): JSX.Element => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [city, setCity] = useState(Config.city)
  const [unit, setUnit] = useState(Config.unit)

  useEffect(() => {
    ;(async () => {
      setForecast(await getForecastForFiveDays(unit, city))
      setIsLoading(false)
    })()
  }, [unit, city])

  if (isLoading || forecast === null) return <LoadingPage />
  return (
    <ForecastPage
      forecast={forecast}
      unit={unit}
      setUnit={setUnit}
      city={city}
      setCity={setCity}
    />
  )
}
