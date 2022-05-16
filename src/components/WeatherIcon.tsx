import {
  faCloudBolt,
  faCloudDrizzle,
  faCloudExclamation,
  faCloudFog,
  faClouds,
  faCloudShowersHeavy,
  faHouseTsunami,
  faSnowflakes,
  faSunBright,
  faTornado,
} from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export type WeatherCondition =
  | "clear"
  | "clouds"
  | "drizzle"
  | "rain"
  | "thunderstorm"
  | "snow"
  | "mist"
  | "smoke"
  | "haze"
  | "dust"
  | "fog"
  | "sand"
  | "dust"
  | "ash"
  | "squall"
  | "tornado"

type WeatherIconProps = {
  condition: WeatherCondition
  className?: string
}

export const WeatherIcon = ({
  condition,
  className,
}: WeatherIconProps): JSX.Element => {
  switch (condition) {
    case "clear":
      return <FontAwesomeIcon className={className} icon={faSunBright} />
    case "clouds":
      return <FontAwesomeIcon className={className} icon={faClouds} />
    case "drizzle":
      return <FontAwesomeIcon className={className} icon={faCloudDrizzle} />
    case "rain":
      return (
        <FontAwesomeIcon className={className} icon={faCloudShowersHeavy} />
      )
    case "thunderstorm":
      return <FontAwesomeIcon className={className} icon={faCloudBolt} />
    case "snow":
      return <FontAwesomeIcon className={className} icon={faSnowflakes} />
    case "mist":
    case "smoke":
    case "haze":
    case "fog":
    case "sand":
    case "dust":
    case "ash":
    case "squall":
      return <FontAwesomeIcon className={className} icon={faCloudFog} />
    case "tornado":
      return <FontAwesomeIcon className={className} icon={faTornado} />
    default:
      return <FontAwesomeIcon className={className} icon={faCloudExclamation} />
  }
}
