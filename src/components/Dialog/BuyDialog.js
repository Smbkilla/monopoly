import React, {useContext} from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import {GameContext} from "../../App";
import {removePlayerFunds, addOwner, addHouse, addHotel, addGameFunds} from "../../util/playerUtil";
import {useCanBuyHotel, useCanBuyHouse} from "../../hooks/canBuyRealEstate";

const BuyDialog = ({
                     open,
                     setOpen,
                     fieldInfo,
                     propertyInfo,
                     property = false,
                     owner = false,
                   }) => {
  const {game, setGame} = useContext(GameContext);
  const canBuyHouse = useCanBuyHouse();
  const canBuyHotel = useCanBuyHotel();

  const handleClose = (data) => {
    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;
    if (data) {
      setGame({
        ...game,
        players: data.players,
        fields: data.fields,
        currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
      });
    } else {
      setGame({
        ...game,
        currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
      });
    }
    setOpen(false);
  };

  const buyField = () => {
    handleClose(addOwner(game, game.currentPlayer, propertyInfo.NAME));
  };

  const buyHouse = () => {
    handleClose(addHouse(game, game.currentPlayer, propertyInfo.NAME));
  };

  const buyHotel = () => {
    handleClose(addHotel(game, game.currentPlayer, propertyInfo.NAME));
  };

  const showFields = () => {
    if (property) {
      if (owner) {
        return (
          <>
            <DialogContentText>
              House price: {propertyInfo.PRICE.HOUSE}
            </DialogContentText>
            <DialogContentText>
              Hotel price: {propertyInfo.PRICE.HOTEL}
            </DialogContentText>
          </>
        );
      }
      return (
        <DialogContentText>
          Field price: {propertyInfo.PRICE.PROPERTY}
        </DialogContentText>
      );
    }
    return (
      <DialogContentText>
        Field price: {propertyInfo.PRICE.PROPERTY}
      </DialogContentText>
    );
  };

  const showButtons = () => {
    if (property) {
      if (owner) {
        return (
          <>
            <Button onClick={buyHouse} color="primary" disabled={!canBuyHouse}>
              Buy house
            </Button>
            <Button onClick={buyHotel} color="primary" disabled={!canBuyHotel}>
              Buy hotel
            </Button>
          </>
        );
      }
      return (
        <Button onClick={buyField} color="primary" variant="contained">
          Buy field
        </Button>
      );
    }
    return (
      <Button onClick={buyField} color="primary" variant="contained">
        Buy field
      </Button>
    );
  };

  return (
    <Dialog open={open} onClose={() => handleClose(null)}>
      <DialogTitle>{propertyInfo.TITLE}</DialogTitle>
      <DialogContent>{showFields()}</DialogContent>
      <DialogActions>
        {showButtons()}
        <Button onClick={() => handleClose(null)} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BuyDialog;
