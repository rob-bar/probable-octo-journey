import styled from "styled-components"

import {
  average,
  filterForecastByDateOffsets,
  getTemperatureFromForecasts,
  incrementDate,
  capitalize,
  getUnitAbbreviation,
  mode,
} from "src/core/pure"

import { Units } from "src/core/Config"
import {
  ForecastRecord,
  ForecastResponse,
} from "src/api/getForecastForFiveDays"
import { WeatherCondition, WeatherIcon } from "./WeatherIcon"
import { useContext } from "react"
import { CityContext } from "src/core/context/CityProvider"

type LargeWeatherCardProps = {
  unit: Units
  forecast: ForecastResponse
  currentDate: Date
}

export const LargeWeatherCard = ({
  unit,
  forecast,
  currentDate,
}: LargeWeatherCardProps): JSX.Element => {
  const { city } = useContext(CityContext)
  // used Techniques here are => Abstraction & Composition
  const averageTempForTheNextThreeDays = average(
    getTemperatureFromForecasts(
      filterForecastByDateOffsets(
        forecast.list,
        currentDate,
        incrementDate(currentDate, 3)
      )
    )
  )

  const todayForecast = filterForecastByDateOffsets(
    forecast.list,
    currentDate,
    incrementDate(currentDate, 1)
  )

  const averageTemp = average(getTemperatureFromForecasts(todayForecast))

  const allWeatherForecastsForThisDay = todayForecast.map(
    (f: ForecastRecord) => f.weather[0].description
  )
  const mostCommonForecast = mode(allWeatherForecastsForThisDay)
  const allMainWeatherForecastsForThisDay = todayForecast.map(
    (f: ForecastRecord) => f.weather[0].main
  )

  return (
    <>
      <City>{capitalize(city)}</City>
      <Card>
        <Today>
          {currentDate.toLocaleDateString("default", { weekday: "long" })}{" "}
          {currentDate.toLocaleDateString()}
        </Today>
        <InfoContainer>
          <AverageTempForThreeDays>
            Average Temperature next 3 days:{" "}
            <strong>
              {averageTempForTheNextThreeDays.toFixed(2)}
              {getUnitAbbreviation(unit)}
            </strong>
          </AverageTempForThreeDays>
          <p>
            Average Temperature:{" "}
            <strong>
              {averageTemp ? averageTemp.toFixed(2) : "No Data found"}
              {averageTemp ? getUnitAbbreviation(unit) : ""}
            </strong>
          </p>
          <p>
            Forecast:{" "}
            <strong>
              {capitalize(
                String(
                  mostCommonForecast ? mostCommonForecast : "No Data found"
                )
              )}
            </strong>
          </p>
          <StyledWeatherIcon
            condition={
              String(
                mode(allMainWeatherForecastsForThisDay)
              ).toLocaleLowerCase() as WeatherCondition
            }
          />
        </InfoContainer>
      </Card>
    </>
  )
}

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0.3125rem 1.5625rem 0 #0000001a;
  border-radius: 0.875rem;
  padding: 3rem;
  position: relative;
  height: 11rem;
  margin: 0 7rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0.75rem 0;
  }
`

const City = styled.h1`
  margin-top: 0;
  font-size: 3.5rem;
  text-align: center;
`

const Today = styled.h2`
  margin-top: 0;
  font-size: 2.75rem;
  margin-bottom: 0.5rem;
`

const AverageTempForThreeDays = styled.p``
const StyledWeatherIcon = styled(WeatherIcon)`
  font-size: 7rem;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 3rem;
  opacity: 0.9;
`

const InfoContainer = styled.div``
