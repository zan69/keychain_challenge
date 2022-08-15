import {createContext, useMemo, useState} from "react";
import {ThemeProvider as MuiThemeProvider} from "@mui/material";
import getTheme from "../configs/theme";

const ThemeContext = createContext({});

export function ThemeProvider({children}) {
    const [mode, setMode] = useState('light');
    const theme = useMemo(() => getTheme(mode), [mode])

    const themeToggle = () => {
        setMode((prevState) => prevState === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{mode, themeToggle}}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContext;