import { FormGroup, FormControl, Button, Input, InputLabel } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { addUser } from '../Service/api';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
});

// Kayıt Etmeden Önce Parametrelerimizi Boş Tanımlıyoruz
const initialValue = {
    name: "",
    surname: "",
    email: "",
    phone: ""
}

export const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, surname, email, phone } = user;
    const history = useHistory();
    //Boş Tanımladığımız Parametrelerimize Value Değerlerini Aktarıyoruz
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    

    const addUserDetail = () => {
        addUser(user);
        // Kayıt Alert'i Gösterimi İçin True Yapıyoruz
        setShowAlert(true);
        setTimeout(() => {
            history.push("/all-users")
        },3000)
    }
    // Kayıt Alert'i Hook'u
    const [showAlert, setShowAlert] = useState(false);

    const classes = useStyle();
    return (
        <FormGroup className={classes.container}>
            {
                showAlert ?
                    <Stack>
                        <Alert variant="outlined" severity="success">
                            <b> Congratulations ! </b> the registration process has been successfully completed !
                        </Alert>
                        <br/>
                    </Stack>
                    : null
            }
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <br />
            <FormControl>
                <InputLabel>Surname</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='surname' value={surname} />
            </FormControl>
            <br />
            <FormControl>
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <br />
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
            </FormControl>
            <br />
            <Button variant="contained" onClick={() => addUserDetail()} color="success">Add New User</Button>
        </FormGroup >
    )
}
