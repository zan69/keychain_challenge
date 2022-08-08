import React from 'react';
import {Box, IconButton, useTheme} from "@mui/material";
import {Brightness4Outlined, Brightness7Outlined} from "@mui/icons-material";


const ThemeToggleButton = ({themeToggle}) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.contrastText',
                borderRadius: 1,
                p: 1,
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ml: 1}} onClick={themeToggle} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Outlined/> : <Brightness4Outlined/>}
            </IconButton>
        </Box>
    );
};

export default ThemeToggleButton;