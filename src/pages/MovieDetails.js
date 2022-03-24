
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {Link} from 'react-router-dom';
const MovieDetails = (props ) =>{
    const { state } = useLocation();
    console.log(state);

    return (<div style={{marginTop:100}}>

<Link  style={{ textDecoration:"None",color:'inherit' }} to={'/'}>
<IconButton aria-label="delete" size="large">
  <ArrowBackIcon fontSize="inherit" /> Go Back To Home
</IconButton>
</Link>
        <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
      
        >


        <Card sx={{width: 1000 }}>
          <CardActionArea>

              
          <CardHeader
      
      title={state.title}
    />
            <CardMedia
              component="img"
              height="350"
              image="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"
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


  