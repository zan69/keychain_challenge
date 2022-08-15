import {NavbarProvider} from "./components/navbar/NavbarContext";
import AllRoutes from "./configs/AllRoutes";
import {ThemeProvider} from "./context/ThemeContext";
import './mock-api';
import {AuthProvider} from "./context/AuthContext";

function App() {

    return (
        <AuthProvider>
            <ThemeProvider>
                <NavbarProvider>
                    <AllRoutes/>
                </NavbarProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
