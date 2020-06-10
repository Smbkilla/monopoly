import React from "react";
import dice from "../../images/diceWhite.png";
import { Button, Grid } from "@material-ui/core";

const Dice = () => {
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const throwDice = () => {
    const firstNumber = getRandomInt(5) + 1;
    const secondNumber = getRandomInt(5) + 1;
    return firstNumber + secondNumber;
  };

  return (
    <Grid container direction="column" justify="center" alignContent="center">
      <Grid container direction="row" justify="center" alignContent="center">
        <Grid item xs={5}>
          <img src={dice} height={120} width={120} />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignContent="center">
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => throwDice()}
          >
            Throw dice
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dice;
