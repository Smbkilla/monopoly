import React from 'react';

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container justify="center">
        <Grid item direction="row" alignItems="center" xs={12}>
          <Grid item xs={1}>
            <Card>
              Parking
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 1
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 2
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 3
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 4
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 5
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 6
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 7
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 8
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 9
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              Go to jail
            </Card>
          </Grid>
        </Grid>
        <Grid item direction="row" xs={12}>
          <Grid item xs={1}>
            <Card>
              Polje 21
            </Card>
          </Grid>
          <Grid item xs={10}>
          </Grid>
          <Grid item xs={1}>
            <Card>
              Polje 22
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
