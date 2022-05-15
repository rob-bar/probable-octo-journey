import { ForecastResponse } from "../../api/getForecastForFiveDays"
import styled from "styled-components"
import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import { useState } from "react"
import { Units } from "../../core/Config"
import { Slider } from "./components/Slider"

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
        <TextField
          id="search-city"
          placeholder="City"
          variant="outlined"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </Header>
      <Slider
        unit={unit}
        city={city}
        forecast={forecast}
        today={today}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      ></Slider>
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
  height: 100%;
  background-color: #f6fbfc;
`
const Title = styled.h1`
  font-size: 2rem;
  flex-grow: 1;
`
