import {createContext, useState} from "react";


const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [auth, setAuth] = useState({user: 'a', accessToken: '', roles: []});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;