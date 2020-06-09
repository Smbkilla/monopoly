import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import "./Field.css";

export default function Field({backgroundColor, title, price, players = [], orientation}) {
  return (
    <Card style={{transform: `rotate(${orientation}deg)`}}>
      <CardHeader style={{backgroundColor}}/>
      <CardContent>
        <Typography className="title" variant="h5" component="h2">
          {title}
        </Typography>
        <Grid container justify="center" spacing={5}>
          {players.map(player => (
            <Grid item xs={6} container justify="space-around">
              <div style={{color: `${player.color}`}}>
                {player.icon}
              </div>
              {player.name}
            </Grid>
          ))}
        </Grid>
        <Typography className="price" variant="h5" component="h2">
          {price}
        </Typography>

      </CardContent>
    </Card>
  )
}