import {NavbarProvider} from "./components/navbar/NavbarContext";
import AllRoutes from "./configs/AllRoutes";
import {ThemeProvider} from "./configs/ThemeContext";
import './mock-api';

function App() {

    return (
        <main>
            <ThemeProvider>
                <NavbarProvider>
                    <AllRoutes/>
                </NavbarProvider>
            </ThemeProvider>
        </main>
    );
}

export default App;
