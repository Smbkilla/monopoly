import React, {useContext} from "react";

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,} from "@material-ui/core";

import {GameContext} from "../../App";
import {addPlayerFunds, removeGameFunds} from "../../util/playerUtil";

const ParkingDialog = ({ open, setOpen }) => {
  const { game, setGame } = useContext(GameContext);

  const handleClose = () => {
    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;

    setGame({
      ...game,
      players: addPlayerFunds(game, game.currentPlayer, game.parkingSpaceReward)
        .players,
      parkingSpaceReward: removeGameFunds(game).parkingSpaceReward,
      currentPlayer:
        currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>
        <DialogContentText>{`You recieved ${game.parkingSpaceReward} $`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ParkingDialog;
