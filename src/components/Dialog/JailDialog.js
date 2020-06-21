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
import useGetCurrentPlayer from "../../hooks/useGetCurrentPlayer";

const JailDialog = ({ open, setOpen, visit = false }) => {
  const { game, setGame } = useContext(GameContext);

  const player = useGetCurrentPlayer();

  const handleClose = () => {
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
    handleClose();
  };

  const showContent = () => {
    if (visit) {
      return <DialogContentText>You're visiting jail</DialogContentText>;
    }
    return (
      <DialogContentText>
        You are in jail. You can get out by getting two equal numbers or wait {player.jailMoves} turns.
      </DialogContentText>
    );
  };

  const showButton = () => {
    if (visit) {
      return (
        <Button
          onClick={handleClose(false)}
          color="primary"
          variant="contained"
        >
          OK
        </Button>
      );
    }
    return (
      <Button onClick={handlePayment} color="primary">
        Get out!
      </Button>
    );
  };
  return (
    <Dialog open={open} >
      <DialogTitle>Info</DialogTitle>
      <DialogContent>{showContent()}</DialogContent>
      <DialogActions>{showButton()}</DialogActions>
    </Dialog>
  );
};

export default JailDialog;
