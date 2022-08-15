import React, {useContext} from 'react';
import {IconButton, useTheme} from "@mui/material";
import {Brightness4Outlined, Brightness7Outlined} from "@mui/icons-material";
import ThemeContext from "../../context/ThemeContext";


const ThemeToggleButton = ({showText = false}) => {
    const {themeToggle} = useContext(ThemeContext);
    const theme = useTheme();
    return (
        // <Box
        //     sx={{
        //         display: 'flex',
        //         width: '100%',
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         color: 'primary.contrastText',
        //         borderRadius: 1,
        //         p: 1,
        //     }}
        // >
        <>
            {showText && <p>{theme.palette.mode} mode</p>}
            <IconButton sx={{ml: 1}} onClick={themeToggle} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Outlined/> : <Brightness4Outlined/>}
            </IconButton>
        </>
        // </Box>
    );
};

export default ThemeToggleButton;