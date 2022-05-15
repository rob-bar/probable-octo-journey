import { MathType } from "mathjs"
import styled from "styled-components"
import { ForecastRecord } from "../../../api/getForecastForFiveDays"
import { Units } from "../../../core/Config"
import { average, mode } from "../../../core/pure/Array"
import { getTemperatureFromForecasts } from "../../../core/pure/forecastRecord"
import { capitalize, zeroFill } from "../../../core/pure/String"
import { getUnitAbbreviation } from "../../../core/pure/Unit"

type WeatherCardProps = {
  date: Date
  forecast: ForecastRecord[]
  unit: Units
}

export const WeatherCard = ({
  date,
  forecast,
  unit,
}: WeatherCardProps): JSX.Element | null => {
  if (forecast.length === 0) return null

  const averageTemp = average(getTemperatureFromForecasts(forecast))
  const allWeatherForecastsForThisDay = forecast.map(
    (f: ForecastRecord) => f.weather[0].description
  )

  return (
    <Container>
      <Title>
        {date.toLocaleDateString("default", { weekday: "long" })}{" "}
        {zeroFill(date.getDate())} / {zeroFill(date.getMonth() + 1)}
      </Title>
      <p>
        Average Temperature:{" "}
        <strong>
          {averageTemp.toFixed(2)}
          {getUnitAbbreviation(unit)}
        </strong>
      </p>
      <p>
        Forecast:{" "}
        <strong>
          {capitalize(String(mode(allWeatherForecastsForThisDay)))}
        </strong>
      </p>
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0.3125rem 1.5625rem 0 #0000001a;
  border-radius: 0.875rem;
  padding: 2rem;
  width: 100%;
`

const Title = styled.h3`
  margin-top: 0;
`
