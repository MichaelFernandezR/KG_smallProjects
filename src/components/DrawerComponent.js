import React, { useState } from 'react'
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
   
    link: {
        textDecoration: 'none',
        color: 'blue',
        fontSize: '20px',
    },
    icon: {
        color: 'white',
    }
}));

    
function DrawerComponent() {

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor='right'>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>Home </Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/aboutpage" className={classes.link}>About </Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText> 
                            <Link to="/contactpage" className={classes.link}>Contact Us</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/faqpage" className={classes.link}>FAQs</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/example" className={classes.link}>Example</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/team" className={classes.link}>Team</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
            <IconButton  className={classes.icon} onClick = { () => setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default DrawerComponent