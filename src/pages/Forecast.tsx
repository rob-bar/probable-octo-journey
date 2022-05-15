import { ForecastResponse } from "../api/getForecastForFiveDays"
import styled from "styled-components"
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import { useState } from "react"
import { incrementDate } from "../core/pure/Date"
import { average } from "../core/pure/Average"
import {
  filterForecastByDateOffsets,
  getTemperatureFromForecasts,
} from "../core/pure/forecastRecord"
import { Units } from "../core/Config"

type ForecastPageProps = {
  forecast: ForecastResponse
  city: string
  setCity: (s: string) => void
  unit: Units
  setUnit: (s: Units) => void
}

export const ForecastPage = ({
  forecast,
  city,
  setCity,
  unit,
  setUnit,
}: ForecastPageProps): JSX.Element => {
  // We use today with a reset of the hours for easier comparisons in the future
  const today = new Date(new Date().setHours(0, 0, 0, 0))
  const [currentDate, setCurrentDate] = useState<Date>(today)

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
  const toggleUnit = (unit: Units) => {
    switch (unit) {
      case Units.STANDARD:
        return Units.METRIC
      case Units.METRIC:
        return Units.STANDARD
      default:
        return Units.METRIC
    }
  }
  return (
    <Page>
      <Header>
        <Title>Forecast App</Title>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              onChange={e => setUnit(toggleUnit(unit))}
            />
          }
          label="Celsius degrees (°)"
        />
      </Header>
      <Slider>
        <PrevArrow>
          <Button
            variant="contained"
            disabled={currentDate.getTime() === today.getTime()}
            onClick={() => setCurrentDate(incrementDate(currentDate, -1))}
          >
            Prev
          </Button>
        </PrevArrow>
        <ForeCastCardWrapper>
          <Card>
            <Today>{currentDate.toLocaleDateString()}</Today>
            <AverageTempForThreeDays>
              Average Temp next 3 days:{" "}
              <strong>{averageTempForTheNextThreeDays.toFixed(2)} K</strong>
            </AverageTempForThreeDays>
          </Card>
        </ForeCastCardWrapper>
        <NextArrow>
          <Button
            variant="contained"
            disabled={
              currentDate.getTime() === incrementDate(today, 4).getTime()
            }
            onClick={() => setCurrentDate(incrementDate(currentDate, 1))}
          >
            Next
          </Button>
        </NextArrow>
      </Slider>
    </Page>
  )
}

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0.3125rem 1.5625rem 0 #0000001a;
  border-radius: 0.875rem;
  padding: 2rem;
`

const Header = styled.header`
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 0.3125rem 1.5625rem 0 #0000001a;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: #222222;
`

const Page = styled.div`
  height: 100%;
  background-color: #f6fbfc;
`

const Slider = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto 1fr auto;
`

const PrevArrow = styled.div`
  padding: 2rem;
`
const NextArrow = styled.div`
  padding: 2rem;
`

const ForeCastCardWrapper = styled.div``

const Title = styled.h1`
  font-size: 2rem;
  flex-grow: 1;
`

const Today = styled.h2``
const AverageTempForThreeDays = styled.p``
