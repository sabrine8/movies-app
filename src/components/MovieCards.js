import{ useContext} from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { pink } from '@mui/material/colors';
import './Catalog.css';
import MoviesContext  from "../AppContext/AppContext"
import { useNavigate} from 'react-router-dom';


const MovieCards = () =>  {
  const { movies } = useContext(MoviesContext);   
  let navigate = useNavigate();
  return (
<Grid    container
  direction="row"
  justifyContent="center"
  alignItems="center" 

  
     spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={4} md={3} key={movie.Title}
        container
        direction="row"
  justifyContent="center"
  alignItems="center"  
 
  
        >
  
            <Card  style={{padding:"12px",margin:"12px"}}    className="card">
              <CardActionArea>

              <CardHeader
      
        title={movie.Title}
        subheader={movie.Year}
      />
                <CardMedia
                  component="img"
                  alt={"Poster of " + movie.Title}
                  className="BeerListItem-img"
                  image={movie.Poster}
                  
                />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" >
                  <FavoriteBorderIcon /> add to favorite
                </Button>
                <Button  onClick={()=> { navigate("/movie", {state:{ title: movie.Title}}) }   } size="small" color="primary">
                   More...
                </Button>
              </CardActions>
            </Card>
  
        </Grid>
      ))}
      </Grid>
  );
}

export default MovieCards;