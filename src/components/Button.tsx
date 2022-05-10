import { Button as MuiButton } from "@mui/material"

type ButtonProps = {
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <MuiButton variant="contained">{children}</MuiButton>
}
