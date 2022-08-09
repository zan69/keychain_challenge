import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useContext} from "react";
import NavbarContext from "./NavbarContext";
import LockIcon from "@mui/icons-material/Lock";

export default function Navbar() {
    const {navbarIsActive} = useContext(NavbarContext)

    if (!navbarIsActive) {
        return
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{boxShadow: 0, height: '8vh'}} color="primary">
                <Box marginY="auto" marginX="5vw" className="flex justify-between">
                    <Box className="inline flex" height="100%">
                        <LockIcon sx={{color: 'common.white', display: 'inline', fontSize: '6vh'}}/>
                        <Box display="inline" marginY="auto">
                            <Typography
                                fontSize='3vh'
                                color='common.white'
                                marginX={1}
                                display='inline'
                            >
                                Password keychain
                            </Typography></Box>
                    </Box>
                    <Box className="inline" marginY="auto">
                        <Typography
                            fontSize='3vh'
                            color='common.white'
                            marginX={1}
                            display='inline'
                        >
                            Password keychain
                        </Typography>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    );
}