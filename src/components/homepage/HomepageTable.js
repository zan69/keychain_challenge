import {DataGrid, GridActionsCellItem} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {CopyAllSharp, Delete, Edit} from "@mui/icons-material";

const getActions = (params) => [
    <GridActionsCellItem label="copy" onClick={() => console.log(params)} icon={<CopyAllSharp/>}/>,
    <GridActionsCellItem label="edit" onClick={() => console.log(params)} icon={<Edit/>}/>,
    <GridActionsCellItem label="delete" onClick={() => console.log(params)} icon={<Delete/>}/>,
]


const columns = [
    {field: 'title', headerName: 'title', minWidth: 100, flex: 0.5, headerAlign: 'center',},
    {field: 'username', headerName: 'username', minWidth: 100, flex: 1, headerAlign: 'center',},
    {field: 'password', headerName: 'password', minWidth: 100, flex: 1, headerAlign: 'center',},
    {field: 'url', headerName: 'url', minWidth: 100, flex: 1, headerAlign: 'center',},
    {
        field: 'actions',
        type: 'actions',
        headerName: 'actions',
        minWidth: 100,
        flex: 0.5,
        getActions,
        headerAlign: 'center',
    },
];

const HomepageTable = ({passwords}) => {
    return (
        <Box sx={{height: '500px', width: '100%'}}>
            <DataGrid
                rows={passwords}
                columns={columns}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </Box>
    )
}

export default HomepageTable;