import React, {useContext, useState} from "react";

import {Button, Grid} from "@material-ui/core";
import Switch, {Case, Default} from "react-switch-case";

import {GameContext} from "../../App";
import {DialogContext} from "../Board/Board";
import useGetCurrentPlayer from "../../hooks/useGetCurrentPlayer"
import {DiceFiveIcon, DiceFourIcon, DiceOneIcon, DiceSixIcon, DiceThreeIcon, DiceTwoIcon} from "../Icon/diceIcon";
import {getNextFieldName, movePlayerToNewField, setPlayerJailMoves} from "../../util/playerUtil";

function Dice() {
  const [numbers, setNumbers] = useState([6, 6]);
  const {game, setGame} = useContext(GameContext);
  const {dialogs, setDialogs} = useContext(DialogContext);
  const player = useGetCurrentPlayer();

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const throwDice = () => {
    const firstNumber = getRandomInt(5) + 1;
    const secondNumber = getRandomInt(5) + 1;

    let visit = false;

    setNumbers([firstNumber, secondNumber]);

    const diceSum = firstNumber + secondNumber;

    if(player.jailMoves <= 0) {
      setGame(movePlayerToNewField(diceSum, game));
      visit = true;
    } else {
      if(firstNumber == secondNumber) {
        //izasao iz zatvora
        setGame(setPlayerJailMoves(game, game.currentPlayer, 0));
      } else {
        setGame(setPlayerJailMoves(game, game.currentPlayer, player.jailMoves - 1));
      }
    }

    setDialogs({
      ...dialogs,
      snackBar: {
        open: player.jailMoves <= 0,
        severity: "info",
        message: `${player.name} rolled ${diceSum} and moves to ${getNextFieldName(diceSum, game)}`,
      },
      showDialog: true,
      jailVisit: visit
    });
  };

  return (
    <Grid container direction="column" justify="center" alignContent="center">
      <Grid container direction="row" justify="center" alignContent="center" spacing={2}>
        <Grid item xs={5}>
          <Switch condition={numbers[0]}>
            <Case value={1}>
              <DiceOneIcon/>
            </Case>
            <Case value={2}>
              <DiceTwoIcon/>
            </Case>
            <Case value={3}>
              <DiceThreeIcon/>
            </Case>
            <Case value={4}>
              <DiceFourIcon/>
            </Case>
            <Case value={5}>
              <DiceFiveIcon/>
            </Case>
            <Case value={6}>
              <DiceSixIcon/>
            </Case>
            <Default>
              null
            </Default>
          </Switch>
        </Grid>
        <Grid item xs={5}>
          <Switch condition={numbers[1]}>
            <Case value={1}>
              <DiceOneIcon/>
            </Case>
            <Case value={2}>
              <DiceTwoIcon/>
            </Case>
            <Case value={3}>
              <DiceThreeIcon/>
            </Case>
            <Case value={4}>
              <DiceFourIcon/>
            </Case>
            <Case value={5}>
              <DiceFiveIcon/>
            </Case>
            <Case value={6}>
              <DiceSixIcon/>
            </Case>
            <Default>
              null
            </Default>
          </Switch>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignContent="center">
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="primary"
            onClick={throwDice}>
            Throw dice
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dice;
