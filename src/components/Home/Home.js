import React from "react";
import {useHistory} from "react-router-dom";

import {Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import cast from "../../images/cast.jpg"

import "./Home.css";

export default function Home() {
  const history = useHistory();


  return (
    <Grid container alignContent="space-between" spacing={2} className="Home">
      <Grid item xs={12}>
        <Typography className="title" variant="h3">
          Welcome
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img className="image" alt="cast" src={cast}/>
      </Grid>
      <Grid item xs={12}>
        <Typography className="title" variant="h3">
          This be our Big Bang Theory Monopoly game
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={() => history.push("/newGame")} color="primary" variant="contained">Create new game</Button>
      </Grid>
    </Grid>
  )
}