import { Checkbox, FormControlLabel } from "@mui/material"
import { Units } from "src/core/Config"

type UnitSwitcherProps = {
  unit: Units
  setUnit: (u: Units) => void
}

export const UnitSwitcher = ({
  unit,
  setUnit,
}: UnitSwitcherProps): JSX.Element => {
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
