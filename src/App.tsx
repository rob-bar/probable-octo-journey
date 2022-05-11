import { GlobalStyle } from "./GlobalStyle"
import { StyledEngineProvider as MUIThemeProvider } from "@mui/material/styles"
import { Forecast } from "./components/Forecast"

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MUIThemeProvider injectFirst>
        <Forecast />
      </MUIThemeProvider>
    </div>
  )
}
