// import react from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
  import DrawerComponent from "./DrawerComponent";
  
const useStyles = makeStyles((theme) => ({
    navlink: {
        marginLeft: theme.spacing(5),
        display: 'flex',
    },
    logo: {
        flexGrow: 1,
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        marginLeft: theme.spacing(5),
        '&:hover': {
            color: 'yellow',
            borderBottom: '1px solid white',
        },
    },
}));

function Navbar() {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Mikel
                </Typography>
                {isMobile ? <DrawerComponent />:
                    <div className={classes.navlink}>
                        <Link to="/" className={classes.link}>Home</Link>
                        <Link to="/About" className={classes.link}>About</Link>
                        <Link to="/ContactUs" className={classes.link}>Contact Us</Link>
                        <Link to="/FAQs" className={classes.link}>FAQs</Link>
                        <Link to="/Example" className={classes.link}>Example</Link>
                         <Link to="/Team" className={classes.link}>Team</Link>
                         <Link to="/TodoList" className={classes.link}>Todo List</Link>

                
                    </div>
                }
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;


//line <Link to="this should be the same as exact path on App.js".
