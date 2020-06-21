import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import {GameContext} from "../../App";

const StartDialog = ({ open, setOpen }) => {
  const {game, setGame} = useContext(GameContext);

  const handleClose = () => {

    setOpen(false);

    // const newCurrentPlayer = game.currentPlayer + 1;
    // const currentPlayerDiff = newCurrentPlayer - game.players.length;

    // setGame({
    //   ...game,
    //   currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
    // });
    // add money to player
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>
        <DialogContentText>This is a START field</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StartDialog;
