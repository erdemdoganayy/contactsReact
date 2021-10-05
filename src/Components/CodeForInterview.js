import { makeStyles } from '@material-ui/core';
import { FaReact } from "react-icons/fa";

const useStyle = makeStyles({
    container: {
        position: 'fixed',
        fontSize: '2rem',
        background: '#1e1e1e',
        color: 'white',
        fontFamily: ' revert',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        position: "fixed",
        fontSize: "10rem",
        marginTop: "-15rem",
        color: "#61DAFB"
    },
    text: {
        position: "fixed",
        fontSize: "0.6rem",
        marginTop: "25rem",
        color: "#61DAFB"
    }
});
export const CodeForInterview = () => {
    const classes = useStyle();
    return (
        <>
            <div className={classes.container}>
                Welcome to CellPhoneBook' !
                <strong className={classes.icon}><FaReact /></strong>
                <strong className={classes.text}>
                This application was developed by Erdem with React
                </strong>
            </div>
        </>
    )

}
