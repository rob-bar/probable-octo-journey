import styled from "styled-components"
import { ForecastRecord } from "src/api/getForecastForFiveDays"
import { Units } from "src/core/Config"
import {
  average,
  mode,
  getTemperatureFromForecasts,
  capitalize,
  zeroFill,
  getUnitAbbreviation,
} from "src/core/pure"
import { WeatherIcon, WeatherCondition } from "./WeatherIcon"

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

  const allMainWeatherForecastsForThisDay = forecast.map(
    (f: ForecastRecord) => f.weather[0].main
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
      <StyledWeatherIcon
        condition={
          String(
            mode(allMainWeatherForecastsForThisDay)
          ).toLocaleLowerCase() as WeatherCondition
        }
      />
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
  position: relative;
  background: linear-gradient(-45deg, #5573f7, #1976d2);
  color: #fff;

  p {
    margin: 0.5rem 0;
  }
`
const Title = styled.h3`
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`

const StyledWeatherIcon = styled(WeatherIcon)`
  font-size: 5rem;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 2rem;
  opacity: 0.9;
`
