import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { GameContext } from "../../App";
import chances from "../../constants/chances";
import _ from "lodash";
import {
  removeGameFunds,
  removePlayerFunds,
  addGameFunds,
  addPlayerFunds,
} from "../../util/playerUtil";

const FieldInfoDialog = ({
  open,
  setOpen,
  fieldInfo,
  propertyInfo,
  // property = false,
}) => {
  const { game, setGame } = useContext(GameContext);

  const randomChance = _.sample(chances); // get random chance using lodash

  const handleClose = (data) => {
    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;

    setGame({
      ...game,
      players: data.players,
      parkingSpaceReward: data.parkingSpaceReward,
      currentPlayer:
        currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer,
    });

    setOpen(false);
  };

  const handlePay = () => {
    handleClose({
      players: removePlayerFunds(game, game.currentPlayer, randomChance.AMOUNT)
        .players,
      parkingSpaceReward: addGameFunds(game, randomChance.AMOUNT)
        .parkingSpaceReward,
    });
  };

  const handleGet = () => {
    handleClose({
      players: addPlayerFunds(game, game.currentPlayer, randomChance.AMOUNT)
        .players,
      parkingSpaceReward: removeGameFunds(game, randomChance.AMOUNT)
        .parkingSpaceReward,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{propertyInfo.TITLE}</DialogTitle>
      <DialogContent>
        <DialogContentText>{randomChance.TITLE}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {randomChance.TYPE ? (
          <Button onClick={handlePay} color="primary" variant="contained">
            Pay
          </Button>
        ) : (
          <Button onClick={handleGet} color="primary" variant="contained">
            Ok
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default FieldInfoDialog;
