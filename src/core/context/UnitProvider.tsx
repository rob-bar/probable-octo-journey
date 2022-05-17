import React, { useState } from "react"
import { Config, Units } from "../Config"

type UnitContextType = {
  unit: Units
  setUnit: (u: Units) => void
}

const INITIAL_STATE = {
  unit: Config.unit,
  setUnit: (_s: Units) => {
    return
  },
}

export const UnitContext = React.createContext<UnitContextType>(INITIAL_STATE)

type UnitProviderType = {
  children: React.ReactNode
}

export const UnitProvider = ({ children }: UnitProviderType): JSX.Element => {
  const [unit, setUnit] = useState(Config.unit)

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitContext.Provider>
  )
}
