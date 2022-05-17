import { Checkbox, FormControlLabel } from "@mui/material"
import { useContext } from "react"
import { Units } from "src/core/Config"
import { UnitContext } from "src/core/context/UnitProvider"

export const UnitSwitcher = (): JSX.Element => {
  const { unit, setUnit } = useContext(UnitContext)
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
    <FormControlLabel
      control={
        <Checkbox defaultChecked onChange={() => setUnit(toggleUnit(unit))} />
      }
      label="Celsius degrees (°)"
    />
  )
}
