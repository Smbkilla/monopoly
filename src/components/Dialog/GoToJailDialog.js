import React, {useContext} from "react";

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,} from "@material-ui/core";

import {GameContext} from "../../App";
import {setPlayerJailMoves} from "../../util/playerUtil";

const GoToJailDialog = ({ open, setOpen }) => {
  const { game, setGame } = useContext(GameContext);

  const handleClose = (flag) => {
    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;

    if (!flag) {
      game.fields.jail.players.push(game.currentPlayer);

      const goToJailFields = game.fields.goToJail.players.filter(
        (value) => value !== game.currentPlayer
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
        currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer,
        players: setPlayerJailMoves(game, game.currentPlayer, 3).players
      });
      // setGame(setPlayerJailMoves(game, game.currentPlayer, 3));
    } else {

      setGame({
        ...game,
        currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer,
        players: setPlayerJailMoves(game, game.currentPlayer, 3).players
      });
    }

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
