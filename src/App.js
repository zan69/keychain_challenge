import Register from "./components/login/register/Register";
import {ThemeProvider} from "@mui/material";
import getTheme from "./theme";
import {useMemo, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/login/login/Login";
import {NavbarProvider} from "./components/navbar/NavbarContext";
import Homepage from "./components/homepage/Homepage";

function App() {

    const [mode, setMode] = useState('light');
    const theme = useMemo(() => getTheme(mode), [mode])

    const themeToggle = () => {
        setMode((prevState) => prevState === 'light' ? 'dark' : 'light')
    }

    return (
        <main>
            <ThemeProvider theme={theme}>
                <NavbarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/register" element={<Register themeToggle={themeToggle}/>}/>
                            <Route path="/login" element={<Login themeToggle={themeToggle}/>}/>
                            <Route path="/homepage" element={<Homepage/>}/>
                        </Routes>
                    </BrowserRouter>
                </NavbarProvider>
            </ThemeProvider>
        </main>
    );
}

export default App;
