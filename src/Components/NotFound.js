import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FaPhoneSlash} from "react-icons/fa";

const useStyle = makeStyles({
    container: {
        position: 'fixed',
        fontSize: '6rem',
        background: '#1e1e1e',
        color: 'white',
        fontFamily: ' revert',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const NotFound = () => {
    const myClass = useStyle();
    return (
        <div className={myClass.container}>
            Not Found <strong style={{marginLeft:'3rem', marginTop:'1.8rem'}}><FaPhoneSlash /></strong> 
        </div>
    )
}
