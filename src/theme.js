import {createTheme} from "@mui/material";

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
            ...(mode === 'light' ? { // LIGHT THEME
                        primary: {
                            light: '#c795f4',
                            main: '#b258d0',
                            dark: '#8e43c3',
                            contrastText: '#252525',
                        },
                        secondary: {
                            light: '#bdc1ea',
                            main: '#2e59b5',
                            dark: '#20465d',
                            contrastText: '#0dffc7',
                        },
                        error: {
                            light: '#eabdbd',
                            main: '#b52e2e',
                            dark: '#5d2020',
                            contrastText: '#ffb20d',
                        },
                        info: {
                            light: '#eee1fb',
                            main: '#978fa0',
                            dark: '#3d3a43',
                            contrastText: '#001c5b',
                        },
                        background: {
                            paper: '#fff',
                            default: '#fff',
                        },
                    } : // DARK THEME
                    {
                        primary: {
                            light: '#571f74',
                            main: '#882eb5',
                            dark: '#c795f4',
                            contrastText: '#ababab',
                        },
                        secondary: {
                            light: '#bdc1ea',
                            main: '#2e59b5',
                            dark: '#20465d',
                            contrastText: '#0dffc7',
                        },
                        error: {
                            light: '#eabdbd',
                            main: '#b52e2e',
                            dark: '#5d2020',
                            contrastText: '#ffb20d',
                        },
                        info: {
                            light: '#302e33',
                            main: '#978fa0',
                            dark: '#3d3a43',
                            contrastText: '#c0c0c0',
                        },
                        background: {
                            paper: '#121212',
                            default: '#121212',
                        },
                    }
            )

        },
    })
}


export default getTheme;