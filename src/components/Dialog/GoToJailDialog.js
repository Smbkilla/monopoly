import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { GameContext } from "../../App";

const GoToJailDialog = ({ open, setOpen }) => {
  const { game, setGame } = useContext(GameContext);

  const handleClose = (flag) => {
    if (!flag) {
      game.fields.jail.players.push(game.playerBefore);
      const goToJailFields = game.fields.goToJail.players.filter(
        (value) => value !== game.playerBefore
      );
      setGame({
        ...game,
        fields: {
          ...game.fields,
          goToJail: {
            ...game.fields.goToJail,
            players: goToJailFields,
          },
        },
      });
    }

    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;

    setGame({
      ...game,
      currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
    });

    setOpen(false);
  };

  const handlePayment = () => {
    game.players[game.currentPlayer].cash -= 200;
    game.parkingSpaceReward += 200;
    setGame(game);
    handleClose(true);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>
        <DialogContentText>You need to go to jail</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleClose(false)}
          color="primary"
          variant="contained"
        >
          OK
        </Button>
        <Button onClick={handlePayment} color="primary">
          Get out!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GoToJailDialog;
