
import * as React from 'react';
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';
//import ContextProvider from '../AppContext/ContextProvider';
const MovieDetails = (props) => {
  const { movie, setMovie } = useState({});
    const { state } = useLocation();
    useEffect(() => {
       getMovieData()
    console.log(state)
    })
    const getMovieData = async () => {
       const url = "http://www.omdbapi.com/en/API/Title/k_xtrgu9mv/?s=&{state.imdbID}"
        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(responseJson);
        setMovie(responseJson.Search)
        console.log('movie'+ movie)
      }

    return (<div style={{ marginTop: 100 }}>

        <Link style={{ textDecoration: "None", color: 'inherit' }} to={'/'}>
            <IconButton aria-label="delete" size="large">
                <ArrowBackIcon fontSize="inherit" /> Go Back To Home
            </IconButton>
        </Link>
        <Grid
            container
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Card sx={{ width: 1000 }}>
                <CardActionArea>
                    <CardHeader

                        title={state.title}
                    />
                    <CardMedia
                        component="img"
                        height="350"
                        image={state.Poster}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>

        </Grid>
    </div>
    );
}

export default MovieDetails;


