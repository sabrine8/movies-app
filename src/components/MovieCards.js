import{ useContext} from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';
import './Catalog.css';
import MoviesContext  from "../AppContext/AppContext"


const MovieCards = () =>  {
  const { movies } = useContext(MoviesContext);   
 
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
                <CardMedia
                  component="img"
                  alt={"Poster of " + movie.Title}
                  className="BeerListItem-img"
                  image={movie.Poster}
                  title={movie.title}
                />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <FavoriteBorderIcon />
                </Button>
                <Button  onClick={()=> {  }   } size="small" color="primary">
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