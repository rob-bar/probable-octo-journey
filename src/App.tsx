import { GlobalStyle } from "./GlobalStyle"
import { StyledEngineProvider as MUIThemeProvider } from "@mui/material/styles"
import { ForecastProvider } from "./ForecastProvider"
import { CityProvider } from "./core/context/CityProvider"

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MUIThemeProvider injectFirst>
        <CityProvider>
          <ForecastProvider />
        </CityProvider>
      </MUIThemeProvider>
    </div>
  )
}
