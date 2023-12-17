import Chart from "./Chart"
import { Stack } from "@mui/material"

const ChartDisplay = () => {
  return (
    <Stack alignItems="center" sx={{p: 4}}>
      <h3>Chart Display using ReChart Library</h3>
      <Chart />
    </Stack>
  )
}

export default ChartDisplay

