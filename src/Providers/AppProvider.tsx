import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

// responsible to change theme to dark color
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
