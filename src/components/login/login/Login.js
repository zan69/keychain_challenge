import {useRef, useState, useEffect} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import ThemeToggleButton from "../../common/ThemeToggleButton";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

const LOGIN_URL = '/login'

const Login = () => {
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [emailError, setEmailError] = useState('')
    const [pwdError, setPwdError] = useState('')

    useEffect(() => {
        emailRef.current.focus();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        if (email.length === 0) {
            setEmailError('Please enter your email')
        }
        if (pwd.length === 0) {
            setPwdError('Please enter your password')
        }

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user: email, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            setAuth({user: email, accessToken: response.data.accessToken, roles: response.data.roles}); // TODO
            navigate(from, {replace: true});
        } catch (err) {
            alert('login error');
            console.log(err);
        }
    }

    return (
        <Box component="section" className="flex justify-center h-screen" bgcolor="background.default">
            <Box className="flex flex-col justify-center" sx={{width: 300}}>
                <Box className="text-center">
                    <LockIcon sx={{color: 'primary.dark', fontSize: 50}}/>
                    <Typography component="h1" fontSize={20} color='primary.dark' margin={1}>Log in</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        color="primary"
                        ref={emailRef}
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        value={email}
                        error={emailError.length > 0}
                        helperText={emailError}
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{marginY: 1}}
                    />
                    <TextField
                        color="primary"
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        value={pwd}
                        error={pwdError.length > 0}
                        helperText={pwdError}
                        fullWidth
                        onChange={(e) => setPwd(e.target.value)}
                        sx={{marginY: 1}}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disableElevation
                        sx={{marginY: 1}}
                    >
                        <Typography color="common.black">
                            Log in
                        </Typography>
                    </Button>
                </form>
                <Typography className="mt-4" color="primary.contrastText">
                    Not registered yet?
                    <Link to="/register" className="ml-3 text-blue-500 hover:underline">Create an account</Link>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        borderRadius: 1,
                        p: 1,
                    }}
                >
                    <ThemeToggleButton showText={true}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Login