import { Units } from "../Config"

export const getUnitAbbreviation = (unit: Units): string => {
  switch (unit) {
    case Units.STANDARD:
      return "K"
    case Units.METRIC:
      return "°"
    default:
      return "°"
  }
}
