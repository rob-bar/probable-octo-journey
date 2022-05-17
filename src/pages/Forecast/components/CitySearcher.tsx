import { TextField } from "@mui/material"
import { useContext } from "react"
import { CityContext } from "src/core/context/CityProvider"

export const CitySearcher = () => {
  const { city, setCity } = useContext(CityContext)
  return (
    <TextField
      id="search-city"
      placeholder="City"
      variant="outlined"
      value={city}
      onChange={e => setCity(e.target.value)}
    />
  )
}
