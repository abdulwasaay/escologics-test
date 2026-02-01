"use client"
import { Button } from "@mui/material"
import { SxProps, useTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import React from "react"

interface ButtonProps {
    children: React.ReactNode;
    onCLick?: () => void;
    sx?: SxProps<Theme>
}

const ButtonLatest: React.FC<ButtonProps> = ({
    children,
    onCLick,
    sx = {},
}): React.ReactNode => {
    const { palette } = useTheme();
    return (
        <Button onClick={onCLick} sx={{ background: palette.secondary.main, color:"white",fontSize:"11px",padding:"10px 20px",borderRadius:"20px", ...sx }}>
            {children}
        </Button>
    )
}

export default ButtonLatest