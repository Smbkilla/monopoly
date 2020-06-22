import React, { useContext } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import { GameContext } from "../../App";
import useGetCurrentPlayer from "../../hooks/useGetCurrentPlayer";

const JailDialog = ({ open, setOpen, visit = false }) => {
  const { game, setGame } = useContext(GameContext);

  const player = useGetCurrentPlayer();

  const handleClose = () => {
    if(visit || player.jailMoves > 0) {
      const newCurrentPlayer = game.currentPlayer + 1;
      const currentPlayerDiff = newCurrentPlayer - game.players.length;

      setGame({
        ...game,
        currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
      });
    }

    setOpen(false);
  };

  const showContent = () => {
    if (visit) {
      return <DialogContentText>You're visiting jail</DialogContentText>;
    }
    if(player.jailMoves > 0) {
      return (
        <DialogContentText>
          You are in jail. You can get out by getting two equal numbers or wait {player.jailMoves} turns.
        </DialogContentText>
      );
    } else {
      return (
        <DialogContentText>
          You got out of jail. Please throw dice again to move.
        </DialogContentText>
      );
    }
  };

  const showButton = () => {
    if (visit) {
      return (
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
        >
          OK
        </Button>
      );
    }
    return (
      <Button onClick={handleClose} color="primary" variant="contained">
        {/* Get out! */}
        OK
      </Button>
    );
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>{showContent()}</DialogContent>
      <DialogActions>{showButton()}</DialogActions>
    </Dialog>
  );
};

export default JailDialog;
