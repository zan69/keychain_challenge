import React from 'react';
import {Box, Button, styled, TextField} from "@mui/material";
import {Add, Search} from "@mui/icons-material";
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        margin: "30px 10px",
        width: "300px",
        '& fieldset': {
            borderRadius: `90px`,
        },
    },
    '& .MuiInputBase-input': {
        padding: "10px 20px",
    }
});

const HomepageHeader = ({setFilter}) => {
    return (
        <Box className="flex justify-between">
            <SearchBar placeholder='Search' variant="outlined" onChange={(e) => setFilter(e.target.value)} InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search/>
                    </InputAdornment>
                )
            }}/>
            <Button id="filled" className="flex h-fit flex" sx={{marginY: '30px', marginX: '10px'}}>
                <Add/>
                add new
            </Button>
        </Box>
    );
};

export default HomepageHeader;
