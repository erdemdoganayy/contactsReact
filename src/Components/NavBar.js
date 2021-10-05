import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { FaRegAddressBook , FaUsers, FaUserPlus} from "react-icons/fa";

    const useStyle = makeStyles({
        header : {
            background : '#111111'
        },
        tabs : {
            color: '#FFFFFF',
            textDecoration : 'none',
            marginRight: 30,
            fontSize : 20,
            fontFamily : "Arial"
        }
    })


export const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar variant="dense">
                <NavLink className={classes.tabs} exact to="./">
                   <FaRegAddressBook/>   CellPhone Book'
                </NavLink>
                <NavLink className={classes.tabs} exact to="all-users">
                   <FaUsers /> Persons
                </NavLink>
                <NavLink className={classes.tabs} exact to="/add">
                  <FaUserPlus/>  Add Person
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}