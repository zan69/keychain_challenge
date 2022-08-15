import Login from "./login/Login";
import Register from "./register/Register";

const LoginConfig = [
    {
        settings: {
            navBar: false,
        },
        path: 'login',
        element: <Login/>,
        allowedRoles: null,
    },
    {
        settings: {
            navBar: false,
        },
        path: 'register',
        element: <Register/>,
        allowedRoles: null,
    }
]

export default LoginConfig;