import { GlobalStyle } from "./GlobalStyle"
import { StyledEngineProvider as MUIThemeProvider } from "@mui/material/styles"
import { ForecastProvider } from "./ForecastProvider"

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MUIThemeProvider injectFirst>
        <ForecastProvider />
      </MUIThemeProvider>
    </div>
  )
}
