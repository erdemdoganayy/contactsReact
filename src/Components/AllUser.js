import react, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Service/api'
import { Table, TableHead, TableCell, TableBody, TableRow, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const useStyle = makeStyles({
    table: {
        width: "90%",
        margin: "2.5rem 0 0 4rem"
    },
    thead: {
        '& > *': {
            background: "#111111",
            color: "#FFFFFF",
            fontSize: "60"
        }
    }
})

export const AllUser = () => {

    const [users, setUsers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const classes = useStyle();
    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }

    const deletedUser = async (id) => {
        await deleteUser(id);
        getAllUsers();
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000)
    }

    return (
        <div>
            {
                showAlert ?
                    <Stack sx={{ width: '90%', margin:"Auto", marginTop: '1rem' }} spacing={5}>
                        <Alert variant="outlined" severity="success">
                            <b> Congratulations ! </b> the user was deleted !
                        </Alert>
                        <br />
                    </Stack>
                    : null
            }
            <Table className={classes.table} style={{marginTop:'1rem'}}>
                <TableHead >
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>E-Mail</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Settings</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.surname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/edit/${user.id}`} variant="outlined" color='primary'>Edit</Button>
                                    <Button onClick={() => deletedUser(user.id)} variant="outlined" color='secondary'>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
