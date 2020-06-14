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

const PayDialog = ({
  open,
  setOpen,
  fieldInfo,
  propertyInfo,
  property = false,
}) => {

  const {game, setGame} = useContext(GameContext);

  const handleClose = () => {
    setOpen(false);
  };

  const calculateAmount = () => {
    return (
      Math.ceil(propertyInfo.PRICE.PROPERTY / 10 +
      fieldInfo.numberOfHouses * 10 +
      fieldInfo.numberOfHotels * 25)
    );
  };

  const payField = () => {
    game.players[game.playerBefore].cash -= calculateAmount();
    game.players[fieldInfo.owner].cash += calculateAmount();
    setGame(game);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{propertyInfo.TITLE}</DialogTitle>
      <DialogContent>
        <DialogContentText>Owner: {fieldInfo.owner}</DialogContentText>
        <DialogContentText>Price: {calculateAmount()}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={payField} color="primary" variant="contained">
          Pay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayDialog;
