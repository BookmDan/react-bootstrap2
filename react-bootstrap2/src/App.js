import React from "react";
import "./styles.css";
import Card from "./Card";
import { Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TagsInput from "./components/TagsInput";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

// let input, hashtagArray, container, t;

// input = document.querySelector('#hashtags');
// container = document.querySelector('.tag-container');
// hashtagArray = [];

// input.addEventListener('keyup', () => {
//     if (event.which == 13 && input.value.length > 0) {
//       var text = document.createTextNode(input.value);
//       var p = document.createElement('p');
//       container.appendChild(p);
//       p.appendChild(text);
//       p.classList.add('tag');
//       input.value = '';
      
//       let deleteTags = document.querySelectorAll('.tag');
      
//       for(let i = 0; i < deleteTags.length; i++) {
//         deleteTags[i].addEventListener('click', () => {
//           container.removeChild(deleteTags[i]);
//         });
//       }
//     }
// });

export default function App() {
  const classes = useStyles();
  return (
    // <div className="App">
    //   <h2>Enter some Tags</h2>
    //   <TagsInput/>
    // </div>
   
    <div>
      
       <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4}>        
          <Card />
      
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
      
    </div> 
  );
}
