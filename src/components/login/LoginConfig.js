import Login from "./login/Login";
import Register from "./register/Register";

const LoginConfig = [
    {
        settings: {
            navBar: false,
        },
        path: 'login',
        element: <Login/>,
    },
    {
        settings: {
            navBar: false,
        },
        path: 'register',
        element: <Register/>,
    }
]

export default LoginConfig;