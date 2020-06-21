import React, {useContext, useState} from "react";

import {Button, Grid} from "@material-ui/core";
import Switch, {Case, Default} from "react-switch-case";

import {GameContext} from "../../App";
import {DialogContext} from "../Board/Board";
import {DiceOneIcon, DiceTwoIcon, DiceThreeIcon, DiceFourIcon, DiceFiveIcon, DiceSixIcon} from "../Icon/diceIcon";
import {movePlayerToNewField} from "../../util/playerUtil";

import useGetCurrentPlayerFieldName from "../../hooks/useGetCurrentPlayerFieldName";
import { getPropertyByName } from "../../util/propertyUtil";
import fieldType from "../../constants/fieldType";
import { getDialog } from "../../util/boardUtil";
import _ from "lodash";
import useGetCurrentPlayer from "../../hooks/useGetCurrentPlayer"
import {setPlayerJailMoves} from "../../util/playerUtil";

function Dice() {
  const [numbers, setNumbers] = useState([6, 6]);
  const {game, setGame} = useContext(GameContext);
  const {dialogs, setDialogs} = useContext(DialogContext);

  const [showDialog, setShowDialog] = useState(false);
  
  const [dialog, setDialog] = useState(null);

  const player = useGetCurrentPlayer();

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const throwDice = () => {
    const firstNumber = getRandomInt(5) + 1;
    const secondNumber = getRandomInt(5) + 1;

    console.log(player);

    console.log(player.jailMoves);

    let visit = false;

    setNumbers([firstNumber, secondNumber]);

    if(player.jailMoves <= 0) {
      setGame(movePlayerToNewField(firstNumber + secondNumber, game));
      visit = true;
    } else {
      if(firstNumber == secondNumber) {
        //izasao iz zatvora
        setGame(setPlayerJailMoves(game, game.currentPlayer, 0));
      } else {
        setGame(setPlayerJailMoves(game, game.currentPlayer, player.jailMoves - 1));
      }
    }

    setDialogs({...dialogs,
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
