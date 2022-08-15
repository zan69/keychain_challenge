import useAuth from "../../hooks/useAuth";
import HomepageTable from "./HomepageTable";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import axios from "../../api/axios";
import HomepageHeader from "./HomepageHeader";

const filterPasswords = (filter, pwds) => {
    return pwds.filter((pwd) => pwd.title.includes(filter))
}

const Homepage = () => {
    const {auth} = useAuth();
    console.log(auth);
    const [passwords, setPasswords] = useState([]);
    const [filter, setFilter] = useState('');

    // const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getPasswords = async () => {
            try {
                const response = await axios.get('/passwords', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setPasswords(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        getPasswords();
        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    return (
        <Box sx={{width: '70%', marginX: 'auto'}}>
            <HomepageHeader setFilter={setFilter}/>
            <HomepageTable passwords={filterPasswords(filter, passwords)}/>
        </Box>
    );
};

export default Homepage;