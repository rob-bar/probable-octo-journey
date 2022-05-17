import { GlobalStyle } from "./GlobalStyle"
import { StyledEngineProvider as MUIThemeProvider } from "@mui/material/styles"
import { ForecastProvider } from "./ForecastProvider"
import { CityProvider } from "./core/context/CityProvider"
import { UnitProvider } from "./core/context/UnitProvider"

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MUIThemeProvider injectFirst>
        <UnitProvider>
          <CityProvider>
            <ForecastProvider />
          </CityProvider>
        </UnitProvider>
      </MUIThemeProvider>
    </div>
  )
}
