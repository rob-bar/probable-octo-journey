import React, { useState } from "react"
import { Config } from "../Config"

type CityContextType = {
  city: string
  setCity: (s: string) => void
}

const INITIAL_STATE = {
  city: Config.city,
  setCity: (_s: string) => {
    return
  },
}

export const CityContext = React.createContext<CityContextType>(INITIAL_STATE)

type CityProviderType = {
  children: React.ReactNode
}

export const CityProvider = ({ children }: CityProviderType): JSX.Element => {
  const [city, setCity] = useState(Config.city)

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  )
}
