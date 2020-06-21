import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import {GameContext} from "../../App";

const FieldInfoDialog = ({
  open,
  setOpen,
  fieldInfo,
  propertyInfo,
  property = false,
}) => {

  const {game, setGame} = useContext(GameContext);

  const handleClose = () => {
    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;

    setGame({
      ...game,
      currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
    });

    setOpen(false);
    // manipulate with cash
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{propertyInfo.TITLE}</DialogTitle>
      <DialogContent>
        {property ? (
          ((<DialogContentText>Owner: {fieldInfo.owner}</DialogContentText>),
          (
            <DialogContentText>
              Price: {propertyInfo.PRICE["PROPERTY"]}
            </DialogContentText>
          ))
        ) : (
          <DialogContentText>That's BS</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FieldInfoDialog;
