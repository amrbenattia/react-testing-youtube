import { Typography, useTheme } from '@mui/material'
const MuiMode = () => {
  const theme = useTheme()
  return (
    <Typography
      component={'h1'}
    >{`You are in ${theme.palette.mode} mode`}</Typography>
  )
}

export default MuiMode
