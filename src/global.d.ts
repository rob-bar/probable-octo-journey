export type Location = {
  lat: number
  lon: number
}

export type City = {
  coord: Location
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

type MainInformation = {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
}

type WeatherForecast = {
  description: string
  icon: string
  id: number
  main: string
}

type Wind = {
  deg: number
  gust: number
  speed: number
}
