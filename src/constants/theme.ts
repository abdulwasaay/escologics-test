import { ThemeOptions } from "@mui/material"

const mainTheme: ThemeOptions = {
    palette: {
        primary: {
            main: "#670000",
            light: "#FFF5E0",
        },
        secondary: {
            main: "#FFA920",
            light: "#F5F5F5"
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#02113799"
        },
        background: {
            default: "#2F2D42",
            paper: "#FFFFFF"
        }
    },
    typography: {
        fontFamily: "var(--font-nunito-sans)",
    },
}

export default mainTheme