import Typography from '@mui/material/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/system';
import GithubIcon from '@material-ui/icons/GitHub';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from '@mui/material';
// import { ThemeProvider } from '@mui/material';

const useStyles = makeStyles(() => ({
    cardContainer: {
        display: 'flex',
        maxWidth: '48rem',
        margin: '3rem auto',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    cardItems: {
        margin: '1rem'
    }
}))


const cardContents = [
    {
        imageSource : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw3Jooj7jVneHt4Q0dVQmZVm&ust=1637974518086000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOivyYj2tPQCFQAAAAAdAAAAABAD',
        name: 'Michael',
        // description:lorem,
        // githubLink: "#",
    },
    {
        imageSource :'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw3Jooj7jVneHt4Q0dVQmZVm&ust=1637974518086000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOivyYj2tPQCFQAAAAAdAAAAABAD',
        name: 'Jojo',
        // description:lorem,
        // githubLink:"#",
    },
    {
        imageSource : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw3Jooj7jVneHt4Q0dVQmZVm&ust=1637974518086000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOivyYj2tPQCFQAAAAAdAAAAABAD',
        name: 'Aisiah',
        // description:lorem,
        // githubLink= "#",
    }
];

const Team = () => {
    const classes = useStyles()
    return (
        <>
        <Typography>
            variant = "h1"
            color = "initial"
            sx={{
                letterSpacing: "-1.5px",
                color: "#333",
                textAlign: "center",
                fontSize: "3rem",
            }}
            Team Members
        </Typography>

        <Box className = {classes.cardContainer}>
            {
            cardContents.map(item => (
                <Card className={classes.cardItems} sx={{maxWidth: 345}}>
                    <CardMedia
                    component="img"
                    alt="profile"
                    height= "auto"
                    image={item.imageSource}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div"
                            color="primary">
                                Web Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" startIcon={<FaceIcon />} sx={{mr:2, mt:'auto'}}
                    >Portpolio</Button>
                    <Link underline="none" href={item.githublink} target="_blank">
                        <Button size="small" startIcon={<GithubIcon />} sx={{mr:1}}
                        >Github</Button>
                    </Link>
                    </CardActions>
                </Card>
            ))
        }
        </Box>
            
        </>
    )
}

export default Team
