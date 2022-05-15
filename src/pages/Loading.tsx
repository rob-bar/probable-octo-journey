import { CircularProgress } from "@mui/material"
import styled from "styled-components"

export const LoadingPage = () => {
  return (
    <Page>
      <CircularProgress />
    </Page>
  )
}

const Page = styled.div`
  height: 100%;
  background-color: #f6fbfc;
  display: grid;
  align-items: center;
  justify-content: center;
`
