import { useEffect, useState } from "react"
import { getForecast, ForecastResponse } from "../core/pure"

export const Forecast = (): JSX.Element => {
  const [forecast, setForecast] = useState<ForecastResponse>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setForecast(await getForecast())
      console.log()
      setIsLoading(false)
    })()
  }, [])

  if (isLoading) return <p>loading</p>
  return <div>{forecast?.list[0].main.temp}</div>
}
