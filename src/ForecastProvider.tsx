import { useContext, useEffect, useState } from "react"
import {
  getForecastForFiveDays,
  ForecastResponse,
} from "./api/getForecastForFiveDays"
import { LoadingPage } from "./pages/Loading"
import { ForecastPage } from "./pages/Forecast"
import { Config } from "./core/Config"
import { CityContext } from "./core/context/CityProvider"

export const ForecastProvider = (): JSX.Element => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { city } = useContext(CityContext)
  const [unit, setUnit] = useState(Config.unit)

  async function fetchForecast() {
    setForecast(await getForecastForFiveDays(unit, city))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchForecast()
  }, [unit, city])

  if (isLoading || forecast === null) return <LoadingPage />

  return <ForecastPage forecast={forecast} unit={unit} setUnit={setUnit} />
}
