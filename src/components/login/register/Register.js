import {useRef, useState, useEffect, useContext} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {Info} from "@mui/icons-material";
import ThemeToggleButton from "../../ThemeToggleButton";
import {Link} from "react-router-dom";
import NavbarContext from "../../navbar/NavbarContext";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = ({themeToggle}) => {
    const {setNavbarIsActive} = useContext(NavbarContext);
    setNavbarIsActive(false);

    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            return;
        }
        console.log(e)
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
                    <Typography component="h1" fontSize={20} color='primary.dark' margin={1}>Register</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        color="primary"
                        ref={emailRef}
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        autoComplete="off"
                        error={((email.length > 5) && !validEmail)}
                        value={email}
                        fullWidth
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{marginY: 1}}
                    />
                    <TextField
                        color="primary"
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        error={(pwd.length > 0 && !validPwd)}
                        value={pwd}
                        fullWidth
                        required
                        onChange={(e) => setPwd(e.target.value)}
                        sx={{marginY: 1}}
                    />
                    <TextField
                        color="primary"
                        id="outlined-password-confirmation-input"
                        label="Confirm password"
                        type="password"
                        error={(matchPwd.length > 0 && !validMatch)}
                        value={matchPwd}
                        fullWidth
                        required
                        onChange={(e) => setMatchPwd(e.target.value)}
                        sx={{marginY: 1}}
                    />
                    {(pwd.length > 3) && !validPwd && (
                        <Box sx={{
                            borderRadius: 1,
                            border: 1,
                            backgroundColor: 'info.light',
                            padding: 1,
                            color: 'info.contrastText',
                            marginBottom: 1,
                        }}>
                            <Typography fontSize={14} component="div">
                                <ul className="list-disc">
                                    <Box className="flex"><Info sx={{marginX: 0.3, fontSize: 18}}/>A
                                        password must have:</Box>
                                    <li className="ml-10">8 to 24 characters</li>
                                    <li className="ml-10">Uppercase and lowercase letters</li>
                                    <li className="ml-10">A number</li>
                                    <li className="ml-10">One of the following special characters: ! @ # $ %</li>
                                </ul>
                            </Typography>
                        </Box>
                    )}
                    {matchPwd.length > 3 && !validMatch && (
                        <Box sx={{
                            borderRadius: 1,
                            border: 1,
                            backgroundColor: 'info.light',
                            padding: 1,
                            color: 'info.contrastText',
                        }}>
                            <Typography fontSize={14}>
                                Must match the first password input field.
                            </Typography>
                        </Box>
                    )}
                    <Button
                        disabled={!validEmail || !validPwd || !validMatch}
                        variant="contained"
                        color="primary"
                        fullWidth
                        disableElevation
                        sx={{marginY: 1}}
                    >
                        Sign Up
                    </Button>
                </form>
                <Typography className="mt-4" color="primary.contrastText">
                    Already registered?
                    <Link to="/login" className="ml-3 text-blue-500 hover:underline">Sign In</Link>
                </Typography>
                <ThemeToggleButton themeToggle={themeToggle}/>
            </Box>
        </Box>
    )
}

export default Register