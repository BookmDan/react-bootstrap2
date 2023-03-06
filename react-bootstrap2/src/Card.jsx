import {React, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardActions, CardContent, Typography, CardMedia, Box} from "@material-ui/core";
// import FavoriteIcon from '@material-ui/icons';
// import { FavoriteIcon } from '@mui/icons-material';
import { IconButton} from '@mui/material'; // , Button
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TagsInput from "./components/TagsInput";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
    // borderRadius: '12px'
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
  // responsive: {
  //   [makeStyles.breakpoints.down('xs')]: {
  //     overflow: 'hidden',
  //     textOverflow: 'ellipsis',
  //     whiteSpace: 'normal'
  //   }
  // }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [tag, setTag] = useState('')
  // const bull = <span className={classes.bullet}>•</span>;

  const handleSubmit = (e) => {
    const newEle = document.createElement('h4');
    newEle.innerText = tag;

   // append it inside the button
    e.target.appendChild(newEle);
    e.preventDefault()
    if (tag) {
      console.log(tag)
    }
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image={require('./assets/japan.jpg')} // require image
        title="Contemplative Reptile"
        style={useStyles.media} // specify styles
      />
      <CardContent>
        {/* <div class="wrapper"> */}
       
        {/* <h3>Your hashtags</h3> */}
        {/* <p class="info">Type your hashtag & click enter.</p> */}
        {/* <input type="text" id="hashtags" autocomplete="off"/>
        <div class="tag-container"></div> */}
      {/* </div> */}

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          {/* <TextField
            onChange={(e) => setTag(e.target.value)}
            className="classes.field"
            id="outlined-basic"
            variant="outlined"
            sx={{ whiteSpace: 'normal' }}
            fullWidth
            multiline
            rows= {3}

          /> */}
          <div className="App">
            <h2>Enter some Tags</h2>
            <TagsInput/>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
          Post
          </Button>
        </form>
        <Typography variant="body2" component="p" sx={{whiteSpace: 'normal'}}>
          {/* {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))} */}
          <br />
          
        </Typography>
      </CardContent>

              {/* <Button
          size="small"
          type="submit"
          color="secondary"
          variant="contained"
          // startIcon={<FavoriteBorderIcon />}
          startIcon={<FavoriteIcon/>}
          // endIcon={<FavoriteIcon/>}
        >
          3 Likes
        </Button> */}

        {/* <Button size="small">Likes</Button> */}
    
      <CardActions>
        {/* <FavoriteIcon color="primary" size = "medium"/> */}
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon color="primary" size = "medium"/> */}
        </IconButton>

        <Button size="small">Likes</Button>

 
      </CardActions>
    </Card>
  );
}

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];