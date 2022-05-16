import styled from "styled-components"
import Chart from "react-apexcharts"

import { ForecastRecord } from "src/api/getForecastForFiveDays"
import { Units } from "src/core/Config"

type HourlyCardProps = {
  forecast: ForecastRecord[]
  unit: Units
  className?: string
}

export const HourlyCard = ({
  forecast,
  unit,
  className,
}: HourlyCardProps): JSX.Element => {
  if (forecast.length === 0)
    return <EmptyContainer className={className}>No Data Found</EmptyContainer>

  const data = {
    series: [
      {
        name: "Temperature",
        data: forecast.map(forecast => [
          forecast.dt * 1000,
          forecast.main.temp,
        ]),
      },
      {
        name: "Feels like Temperature",
        data: forecast.map(forecast => [
          forecast.dt * 1000,
          forecast.main.feels_like,
        ]),
      },
      {
        name: "Min Temperature",
        data: forecast.map(forecast => [
          forecast.dt * 1000,
          forecast.main.temp_min,
        ]),
      },
      {
        name: "Max Temperature",
        data: forecast.map(forecast => [
          forecast.dt * 1000,
          forecast.main.temp_max,
        ]),
      },
    ],
    options: {
      chart: {
        height: 600,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      colors: ["#5573F7", "#E65F39", "#02B57E", "#131A38"],
      stroke: {
        width: 3,
        curve: "smooth",
      },
      title: {
        text: "Hourly forecast",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: "datetime",
        title: {
          text: "Time",
        },
      },
      yaxis: {
        title: {
          text: `Unit: ${unit}`,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  }
  return (
    <Container className={className}>
      <Chart
        options={data.options as ApexCharts.ApexOptions}
        series={data.series as ApexAxisChartSeries}
        type="line"
        height={600}
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
`

const EmptyContainer = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0.3125rem 1.5625rem 0 #0000001a;
  border-radius: 0.875rem;
  padding: 2rem;
  width: 100%;
  height: 37.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
