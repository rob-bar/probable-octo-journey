import styled from "styled-components"
import { Button } from "@mui/material"

import { incrementDate } from "src/core/pure/Date"
import { ForecastResponse } from "src/api/getForecastForFiveDays"
import { Units } from "src/core/Config"
import { LargeWeatherCard } from "src/components/LargeWeatherCard"

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
  return (
    <Container>
      <PrevArrow>
        <Button
          size="large"
          variant="contained"
          disabled={currentDate.getTime() === today.getTime()}
          onClick={() => setCurrentDate(incrementDate(currentDate, -1))}
        >
          Prev
        </Button>
      </PrevArrow>
      <ForeCastCardWrapper>
        <LargeWeatherCard
          unit={unit}
          city={city}
          forecast={forecast}
          currentDate={currentDate}
        />
      </ForeCastCardWrapper>
      <NextArrow>
        <Button
          size="large"
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
