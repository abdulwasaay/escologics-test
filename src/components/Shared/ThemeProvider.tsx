"use client"
import theme from "@/libs/themeCreater"
import { ThemeProvider } from "@mui/material/styles"
import React from "react"
import NavBarLatest from "./NavBar"

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <NavBarLatest />
            {children}
        </ThemeProvider>
    )
}

export default MUIThemeProvider