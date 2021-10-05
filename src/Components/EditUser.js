import { FormGroup, FormControl, Button, Input, InputLabel } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { editUser, getUsers } from '../Service/api';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useHistory, useParams } from 'react-router';

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

export const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const [showAlert, setShowAlert] = useState(false);
    const classes = useStyle();
    const history = useHistory();
    const { id } = useParams();
    const { name, surname, email, phone } = user;

    //Boş Tanımladığımız Parametrelerimize Value Değerlerini Aktarıyoruz
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    /* -----------------------------------------------------------------------*/

    
    // Seçilen İD'li Kişiyi Getiren Fonksiyon
    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }
    useEffect(() => {
        loadUserDetails();
    }, []);


    // Düzenlenen İçeriği Getiren Fonksiyon
    const editUserDetail = async () => {
        const response = await editUser(id, user);
        // Kayıt Alert'i Gösterimi İçin True Yapıyoruz
        setShowAlert(true);
        setTimeout(() => {
            history.push("/all-users")
        }, 3000)
    }

    return (
        <FormGroup className={classes.container}>
            {
                showAlert ?
                    <Stack>
                        <Alert variant="outlined" severity="success">
                            <b> Congratulations ! </b> the update was successful !
                        </Alert>
                        <br />
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
            <Button variant="contained" onClick={() => editUserDetail()} color="success">Edit User</Button>
        </FormGroup >
    )
}
