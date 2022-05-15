import styled from "styled-components"
import { Button } from "@mui/material"
import { incrementDate } from "../../../core/pure/Date"
import { average } from "../../../core/pure/Array"
import {
  filterForecastByDateOffsets,
  getTemperatureFromForecasts,
} from "../../../core/pure/forecastRecord"

import { getUnitAbbreviation } from "../../../core/pure/Unit"
import { capitalize } from "../../../core/pure/String"
import { ForecastResponse } from "../../../api/getForecastForFiveDays"
import { Units } from "../../../core/Config"

type SliderProps = {
  unit: Units
  city: string
  forecast: ForecastResponse
  today: Date
  currentDate: Date
  setCurrentDate: (d: Date) => void
}

export const Slider = ({
  unit,
  city,
  forecast,
  today,
  currentDate,
  setCurrentDate,
}: SliderProps): JSX.Element => {
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

  return (
    <Container>
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
          <Today>
            {capitalize(city)} {currentDate.toLocaleDateString()}
          </Today>
          <AverageTempForThreeDays>
            Average Temperature next 3 days:{" "}
            <strong>
              {averageTempForTheNextThreeDays.toFixed(2)}
              {getUnitAbbreviation(unit)}
            </strong>
          </AverageTempForThreeDays>
        </Card>
      </ForeCastCardWrapper>
      <NextArrow>
        <Button
          variant="contained"
          disabled={currentDate.getTime() === incrementDate(today, 4).getTime()}
          onClick={() => setCurrentDate(incrementDate(currentDate, 1))}
        >
          Next
        </Button>
      </NextArrow>
    </Container>
  )
}

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0.3125rem 1.5625rem 0 #0000001a;
  border-radius: 0.875rem;
  padding: 2rem;
`

const Container = styled.div`
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

const Today = styled.h2`
  margin-top: 0;
`
const AverageTempForThreeDays = styled.p``
