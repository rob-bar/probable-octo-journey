import styled from "styled-components"
import { useState } from "react"
import { TextField } from "@mui/material"

import { ForecastResponse } from "src/api/getForecastForFiveDays"
import { Units } from "src/core/Config"
import { WeatherCard } from "src/components/WeatherCard"
import { incrementDate, filterForecastByDateOffsets } from "src/core/pure"

import { Slider } from "./components/Slider"
import { UnitSwitcher } from "./components/UnitSwitcher"
import { HourlyCard } from "./components/HourlyCard"
import { CitySearcher } from "./components/CitySearcher"

type ForecastPageProps = {
  forecast: ForecastResponse
}

export const ForecastPage = ({ forecast }: ForecastPageProps): JSX.Element => {
  // We use today with a reset of the hours for easier comparisons in the future
  const today = new Date(new Date().setHours(0, 0, 0, 0))
  const [currentDate, setCurrentDate] = useState<Date>(today)

  return (
    <Page>
      <Header>
        <Title>Forecast App</Title>
        <UnitSwitcher />
        <CitySearcher />
      </Header>
      <Slider
        forecast={forecast}
        today={today}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <WeatherCards>
        <WeatherCard
          date={incrementDate(currentDate, 1)}
          forecast={filterForecastByDateOffsets(
            forecast.list,
            incrementDate(currentDate, 1),
            incrementDate(currentDate, 2)
          )}
        />
        <WeatherCard
          date={incrementDate(currentDate, 2)}
          forecast={filterForecastByDateOffsets(
            forecast.list,
            incrementDate(currentDate, 2),
            incrementDate(currentDate, 3)
          )}
        />
        <WeatherCard
          date={incrementDate(currentDate, 3)}
          forecast={filterForecastByDateOffsets(
            forecast.list,
            incrementDate(currentDate, 3),
            incrementDate(currentDate, 4)
          )}
        />
      </WeatherCards>
      <HourlyCardWrapper>
        <HourlyCard
          forecast={filterForecastByDateOffsets(
            forecast.list,
            currentDate,
            incrementDate(currentDate, 1)
          )}
        />
      </HourlyCardWrapper>
    </Page>
  )
}

const Header = styled.header`
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 0.3125rem 1.5625rem 0 #0000001a;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  padding: 0 0.625rem 0 2rem;
  color: #222222;
`

const Page = styled.div`
  min-height: 100%;
  background-color: #f6fbfc;
  padding-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  flex-grow: 1;
`

const WeatherCards = styled.div`
  margin: 2rem;
  box-sizing: border-box;
  padding: 0 6.25rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

const HourlyCardWrapper = styled.div`
  padding: 0 6.25rem;
  margin: 2rem;
`
