import React, {useContext} from "react";

import {Button, Grid} from "@material-ui/core";

import {GameContext} from "../../App";
import useGetCurrentPlayer from "../../hooks/useGetCurrentPlayer";
import useGetCurrentPlayerFieldName from "../../hooks/useGetCurrentPlayerFieldName";
import {getPropertyByIndex, getPropertyByName} from "../../util/propertyUtil";

import dice from "../../images/diceWhite.png";

function Dice() {
  const context = useContext(GameContext);
  const currentPlayer = useGetCurrentPlayer();
  const playerFieldName = useGetCurrentPlayerFieldName();

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const throwDice = () => {
    const {game, setGame} = context;
    const playerField = game.fields[playerFieldName];
    const firstNumber = getRandomInt(5) + 1;
    const secondNumber = getRandomInt(5) + 1;
    const diceSum = firstNumber + secondNumber;

    const newFieldIndex = getPropertyByName(playerFieldName).INDEX + diceSum;
    const diff = newFieldIndex - 39;

    const newPlayerFieldIndex = diff >= 0 ? diff : newFieldIndex;
    const fieldProperty = getPropertyByIndex(newPlayerFieldIndex);

    const newPlayerField = game.fields[fieldProperty.NAME];

    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;

    setGame({
      ...game,
      currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer,
      fields: {
        ...game.fields,
        [playerFieldName]: {
          ...playerField,
          players: playerField.players.filter(playerIndex => playerIndex !== currentPlayer.index),
        },
        [fieldProperty.NAME]: {
          ...newPlayerField,
          players: [...newPlayerField.players, currentPlayer.index],
        }
      },
    });
  };

  return (
    <Grid container direction="column" justify="center" alignContent="center">
      <Grid container direction="row" justify="center" alignContent="center">
        <Grid item xs={5}>
          <img src={dice} height={120} width={120}/>
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
