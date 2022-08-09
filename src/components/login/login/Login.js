import {useRef, useState, useEffect, useContext} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import ThemeToggleButton from "../../ThemeToggleButton";
// noinspection ES6CheckImport
import {Link, useNavigate} from "react-router-dom";
import NavbarContext from "../../navbar/NavbarContext";

const Login = ({themeToggle}) => {
    const {setNavbarIsActive} = useContext(NavbarContext);
    setNavbarIsActive(false);
    const navigate = useNavigate()

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
        console.log(e)
        navigate("/homepage")

        // try {
        //     const response = await axios.post(REGISTER_URL,
        //         JSON.stringify({email, pwd}),
        //         {
        //             headers: {'Content-Type': 'application/json'},
        //             withCredentials: true
        //         }
        //     );
        //     console.log(response?.data);
        //     console.log(response?.accessToken);
        //     console.log(JSON.stringify(response))
        //     //clear state and controlled inputs
        //     //need value attrib on inputs for this
        //     setEmail('');
        //     setPwd('');
        //     setMatchPwd('');
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 409) {
        //         setErrMsg('Username Taken');
        //     } else {
        //         setErrMsg('Registration Failed')
        //     }
        //     errRef.current.focus();
        // }
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
                        autoComplete="off"
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
                <ThemeToggleButton themeToggle={themeToggle}/>
            </Box>
        </Box>
    )
}

export default Login