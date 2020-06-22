import React, {useContext } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import { GameContext } from "../../App";
import { removePlayerFunds, addOwner, addHouse, addHotel, addGameFunds } from "../../util/playerUtil";
import {useCanBuyHotel, useCanBuyHouse} from "../../hooks/canBuyRealEstate";

const BuyDialog = ({
  open,
  setOpen,
  fieldInfo,
  propertyInfo,
  property = false,
  owner = false,
}) => {
  const { game, setGame } = useContext(GameContext);
  const canBuyHouse = useCanBuyHouse();
  const canBuyHotel = useCanBuyHotel();

  const handleClose = (data) => {
    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;
    if(data){
      setGame({
        ...game,
        players: data.players,
        fields: data.fields,
        currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
      });
    }
    else {
      setGame({
        ...game,
        currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
      });
    }
    setOpen(false);
  };

  const buyField = () => {
    console.log(game)
    handleClose({
      fields: addOwner(game, game.currentPlayer, propertyInfo.NAME).fields,
      players: removePlayerFunds(game, game.currentPlayer, propertyInfo.PRICE.PROPERTY).players,
    });
  };

  const buyHouse = () => {
    handleClose({
      fields: addHouse(game, propertyInfo.NAME).fields,
      players: removePlayerFunds(game, game.currentPlayer, propertyInfo.PRICE.HOUSE).players,
    });
  };

  const buyHotel = () => {
    handleClose({
      fields: addHotel(game, propertyInfo.NAME).fields,
      players: removePlayerFunds(game, game.currentPlayer, propertyInfo.PRICE.HOTEL).players,
    });
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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{propertyInfo.TITLE}</DialogTitle>
      <DialogContent>{showFields()}</DialogContent>
      <DialogActions>
        {showButtons()}
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BuyDialog;
