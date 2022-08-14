import {createContext, useState} from "react";
import Navbar from "./Navbar";

const NavbarContext = createContext({});

export function NavbarProvider({children}) {
    const [navbarIsActive, setNavbarIsActive] = useState(true)

    return (
        <NavbarContext.Provider value={{navbarIsActive, setNavbarIsActive}}>
            <Navbar/>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarContext;