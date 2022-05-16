import { ForecastResponse } from "src/api/getForecastForFiveDays"

export const forecastRecordFixture: ForecastResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1652745600,
      main: {
        temp: 7.86,
        feels_like: 6.67,
        temp_min: 5.85,
        temp_max: 7.86,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1022,
        humidity: 47,
        temp_kf: 2.01,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 2.03,
        deg: 32,
        gust: 4.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-17 00:00:00",
    },
    {
      dt: 1652756400,
      main: {
        temp: 5.58,
        feels_like: 4.51,
        temp_min: 3.94,
        temp_max: 5.58,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 53,
        temp_kf: 1.64,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 1.58,
        deg: 23,
        gust: 2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-17 03:00:00",
    },
    {
      dt: 1652767200,
      main: {
        temp: 9.06,
        feels_like: 8.57,
        temp_min: 9.06,
        temp_max: 9.06,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 1.51,
        deg: 66,
        gust: 2.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-17 06:00:00",
    },
    {
      dt: 1652778000,
      main: {
        temp: 15,
        feels_like: 13.26,
        temp_min: 15,
        temp_max: 15,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1023,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.22,
        deg: 114,
        gust: 1.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-17 09:00:00",
    },
    {
      dt: 1652788800,
      main: {
        temp: 18.5,
        feels_like: 17.06,
        temp_min: 18.5,
        temp_max: 18.5,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.72,
        deg: 175,
        gust: 1.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-17 12:00:00",
    },
    {
      dt: 1652799600,
      main: {
        temp: 19.15,
        feels_like: 17.75,
        temp_min: 19.15,
        temp_max: 19.15,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 24,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.79,
        deg: 194,
        gust: 2.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-17 15:00:00",
    },
    {
      dt: 1652810400,
      main: {
        temp: 15.74,
        feels_like: 14.23,
        temp_min: 15.74,
        temp_max: 15.74,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.37,
        deg: 189,
        gust: 6.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-17 18:00:00",
    },
    {
      dt: 1652821200,
      main: {
        temp: 8.9,
        feels_like: 8.27,
        temp_min: 8.9,
        temp_max: 8.9,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.62,
        deg: 176,
        gust: 2.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-17 21:00:00",
    },
    {
      dt: 1652832000,
      main: {
        temp: 6.38,
        feels_like: 5.28,
        temp_min: 6.38,
        temp_max: 6.38,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.71,
        deg: 181,
        gust: 3.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-18 00:00:00",
    },
    {
      dt: 1652842800,
      main: {
        temp: 6.45,
        feels_like: 5.53,
        temp_min: 6.45,
        temp_max: 6.45,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1021,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 1.56,
        deg: 190,
        gust: 3.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-18 03:00:00",
    },
    {
      dt: 1652853600,
      main: {
        temp: 12.57,
        feels_like: 10.95,
        temp_min: 12.57,
        temp_max: 12.57,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1020,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 3.25,
        deg: 196,
        gust: 9.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-18 06:00:00",
    },
    {
      dt: 1652864400,
      main: {
        temp: 16.77,
        feels_like: 15.52,
        temp_min: 16.77,
        temp_max: 16.77,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1019,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.09,
        deg: 199,
        gust: 8.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-18 09:00:00",
    },
    {
      dt: 1652875200,
      main: {
        temp: 17.42,
        feels_like: 16.52,
        temp_min: 17.42,
        temp_max: 17.42,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 5.98,
        deg: 185,
        gust: 8.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-18 12:00:00",
    },
    {
      dt: 1652886000,
      main: {
        temp: 12.9,
        feels_like: 12.41,
        temp_min: 12.9,
        temp_max: 12.9,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1017,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.49,
        deg: 189,
        gust: 10.28,
      },
      visibility: 10000,
      pop: 0.78,
      rain: {
        "3h": 0.6,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-18 15:00:00",
    },
    {
      dt: 1652896800,
      main: {
        temp: 11.79,
        feels_like: 11.43,
        temp_min: 11.79,
        temp_max: 11.79,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1015,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.92,
        deg: 184,
        gust: 7.28,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        "3h": 0.58,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-18 18:00:00",
    },
    {
      dt: 1652907600,
      main: {
        temp: 10.96,
        feels_like: 10.64,
        temp_min: 10.96,
        temp_max: 10.96,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1014,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.35,
        deg: 215,
        gust: 3.49,
      },
      visibility: 3310,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-18 21:00:00",
    },
    {
      dt: 1652918400,
      main: {
        temp: 10.57,
        feels_like: 10.11,
        temp_min: 10.57,
        temp_max: 10.57,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1014,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.26,
        deg: 242,
        gust: 1.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-19 00:00:00",
    },
    {
      dt: 1652929200,
      main: {
        temp: 9.21,
        feels_like: 9.21,
        temp_min: 9.21,
        temp_max: 9.21,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1014,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 0.78,
        deg: 256,
        gust: 0.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-19 03:00:00",
    },
    {
      dt: 1652940000,
      main: {
        temp: 12.72,
        feels_like: 12.21,
        temp_min: 12.72,
        temp_max: 12.72,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1014,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 0.91,
        deg: 102,
        gust: 1.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-19 06:00:00",
    },
    {
      dt: 1652950800,
      main: {
        temp: 16.47,
        feels_like: 15.79,
        temp_min: 16.47,
        temp_max: 16.47,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.44,
        deg: 135,
        gust: 2.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-19 09:00:00",
    },
    {
      dt: 1652961600,
      main: {
        temp: 19.8,
        feels_like: 18.96,
        temp_min: 19.8,
        temp_max: 19.8,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1012,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.79,
        deg: 199,
        gust: 5.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-19 12:00:00",
    },
    {
      dt: 1652972400,
      main: {
        temp: 19.28,
        feels_like: 18.46,
        temp_min: 19.28,
        temp_max: 19.28,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.55,
        deg: 193,
        gust: 6.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-19 15:00:00",
    },
    {
      dt: 1652983200,
      main: {
        temp: 14.77,
        feels_like: 14,
        temp_min: 14.77,
        temp_max: 14.77,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.13,
        deg: 164,
        gust: 6.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-19 18:00:00",
    },
    {
      dt: 1652994000,
      main: {
        temp: 10.2,
        feels_like: 9.76,
        temp_min: 10.2,
        temp_max: 10.2,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.86,
        deg: 169,
        gust: 3.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-19 21:00:00",
    },
    {
      dt: 1653004800,
      main: {
        temp: 9.84,
        feels_like: 9.84,
        temp_min: 9.84,
        temp_max: 9.84,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.7,
        deg: 152,
        gust: 0.81,
      },
      visibility: 8989,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-20 00:00:00",
    },
    {
      dt: 1653015600,
      main: {
        temp: 10.11,
        feels_like: 9.63,
        temp_min: 10.11,
        temp_max: 10.11,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.64,
        deg: 13,
        gust: 0.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-20 03:00:00",
    },
    {
      dt: 1653026400,
      main: {
        temp: 14.8,
        feels_like: 13.88,
        temp_min: 14.8,
        temp_max: 14.8,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 2.82,
        deg: 0,
        gust: 5.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-20 06:00:00",
    },
    {
      dt: 1653037200,
      main: {
        temp: 19.15,
        feels_like: 18.24,
        temp_min: 19.15,
        temp_max: 19.15,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.78,
        deg: 22,
        gust: 3.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-20 09:00:00",
    },
    {
      dt: 1653048000,
      main: {
        temp: 19.39,
        feels_like: 18.53,
        temp_min: 19.39,
        temp_max: 19.39,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 3.69,
        deg: 32,
        gust: 3.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-20 12:00:00",
    },
    {
      dt: 1653058800,
      main: {
        temp: 18.88,
        feels_like: 18.02,
        temp_min: 18.88,
        temp_max: 18.88,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.77,
        deg: 83,
        gust: 3.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-20 15:00:00",
    },
    {
      dt: 1653069600,
      main: {
        temp: 16.11,
        feels_like: 15.42,
        temp_min: 16.11,
        temp_max: 16.11,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.26,
        deg: 84,
        gust: 7.08,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-20 18:00:00",
    },
    {
      dt: 1653080400,
      main: {
        temp: 12.23,
        feels_like: 11.73,
        temp_min: 12.23,
        temp_max: 12.23,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.22,
        deg: 82,
        gust: 6.6,
      },
      visibility: 10000,
      pop: 0.75,
      rain: {
        "3h": 1.06,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-20 21:00:00",
    },
    {
      dt: 1653091200,
      main: {
        temp: 11.69,
        feels_like: 11.29,
        temp_min: 11.69,
        temp_max: 11.69,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1007,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.69,
        deg: 104,
        gust: 7.46,
      },
      visibility: 10000,
      pop: 0.77,
      rain: {
        "3h": 1.34,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-21 00:00:00",
    },
    {
      dt: 1653102000,
      main: {
        temp: 10.53,
        feels_like: 10.07,
        temp_min: 10.53,
        temp_max: 10.53,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.92,
        deg: 108,
        gust: 6.12,
      },
      visibility: 10000,
      pop: 0.61,
      rain: {
        "3h": 0.81,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-21 03:00:00",
    },
    {
      dt: 1653112800,
      main: {
        temp: 11.46,
        feels_like: 10.85,
        temp_min: 11.46,
        temp_max: 11.46,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.41,
        deg: 129,
        gust: 2.4,
      },
      visibility: 10000,
      pop: 0.53,
      rain: {
        "3h": 0.2,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-21 06:00:00",
    },
    {
      dt: 1653123600,
      main: {
        temp: 13.73,
        feels_like: 12.86,
        temp_min: 13.73,
        temp_max: 13.73,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.66,
        deg: 172,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-21 09:00:00",
    },
    {
      dt: 1653134400,
      main: {
        temp: 16.17,
        feels_like: 15.15,
        temp_min: 16.17,
        temp_max: 16.17,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.71,
        deg: 185,
        gust: 1.68,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-21 12:00:00",
    },
    {
      dt: 1653145200,
      main: {
        temp: 15.09,
        feels_like: 14.22,
        temp_min: 15.09,
        temp_max: 15.09,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.09,
        deg: 74,
        gust: 2.88,
      },
      visibility: 10000,
      pop: 0.53,
      rain: {
        "3h": 0.45,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-21 15:00:00",
    },
    {
      dt: 1653156000,
      main: {
        temp: 11.2,
        feels_like: 10.67,
        temp_min: 11.2,
        temp_max: 11.2,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1007,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.22,
        deg: 79,
        gust: 3.39,
      },
      visibility: 10000,
      pop: 0.53,
      rain: {
        "3h": 0.94,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-05-21 18:00:00",
    },
    {
      dt: 1653166800,
      main: {
        temp: 10.62,
        feels_like: 10.14,
        temp_min: 10.62,
        temp_max: 10.62,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.63,
        deg: 51,
        gust: 0.74,
      },
      visibility: 10000,
      pop: 0.28,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-05-21 21:00:00",
    },
  ],
  city: {
    id: 3143244,
    name: "Oslo",
    coord: {
      lat: 59.9127,
      lon: 10.7461,
    },
    country: "NO",
    population: 580000,
    timezone: 7200,
    sunrise: 1652668678,
    sunset: 1652730539,
  },
}