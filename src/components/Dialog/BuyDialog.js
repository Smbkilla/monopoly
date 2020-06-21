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

  const handleClose = () => {
    const newCurrentPlayer = game.currentPlayer + 1;
    const currentPlayerDiff = newCurrentPlayer - game.players.length;

    console.log(game.currentPlayer);

    setGame({
      ...game,
      currentPlayer: currentPlayerDiff >= 0 ? currentPlayerDiff : newCurrentPlayer
    });

    console.log(game.currentPlayer);

    setOpen(false);
  };

  const updateGameContext = () => {
    game.fields[propertyInfo.NAME] = fieldInfo;
    setGame(game);
    handleClose();
  };

  const buyField = () => {
    // money goes to parking field and player becomes an owner
    fieldInfo.owner = game.currentPlayer;
    game.parkingSpaceReward += propertyInfo.PRICE.PROPERTY;
    game.players[game.currentPlayer].cash -= propertyInfo.PRICE.PROPERTY;
    game.players[game.currentPlayer].properties.push(propertyInfo);
    console.log("Buy field");
    updateGameContext();
  };

  const buyHouse = () => {
    fieldInfo.numberOfHouses++;
    game.parkingSpaceReward += propertyInfo.PRICE.HOUSE;
    game.players[game.currentPlayer].cash -= propertyInfo.PRICE.HOUSE;
    console.log("Buy house");
    updateGameContext();
  };

  const buyHotel = () => {
    fieldInfo.numberOfHotels++;
    game.parkingSpaceReward += propertyInfo.PRICE.HOTEL;
    game.players[game.currentPlayer].cash -= propertyInfo.PRICE.HOTEL;
    console.log("Buy hotel");
    updateGameContext();
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
