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

const JailDialog = ({ open, setOpen, visit = false }) => {
  const { game, setGame } = useContext(GameContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = () => {
    game.players[game.playerBefore].cash -= 200;
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
        You're a convict, pay 200 to get out.
      </DialogContentText>
    );
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
      <Button onClick={handlePayment} color="primary">
        Get out!
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
