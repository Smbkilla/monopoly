import _ from "lodash";
import {getPropertyByIndex, getPropertyByName} from "./propertyUtil";
import gameConstants from "../constants/game";

export function setPlayerJailMoves(game, playerIndex, moves) {
  const {players} = game;

  const newPlayers = players.map(player => {
    if (player.index === playerIndex) {
      return {
        ...player,
        jailMoves: moves
      };
    } else {
      return player;
    }
  });

  return {
    ...game,
    players: newPlayers,
  };
}

export function addPlayerFunds(game, playerIndex, amount) {
  const {players} = game;

  const newPlayers = players.map(player => {
    if (player.index === playerIndex) {
      return {
        ...player,
        cash: player.cash + amount,
      };
    } else {
      return player;
    }
  });

  return {
    ...game,
    players: newPlayers,
  };
}

export function removePlayerFunds(game, playerIndex, amount) {
  const {players} = game;

  const newPlayers = players.map(player => {
    if (player.index === playerIndex) {
      return {
        ...player,
        cash: player.cash - amount,
      };
    } else {
      return player;
    }
  });

  return {
    ...game,
    players: newPlayers,
  };
}

export function movePlayerToNewField(steps, game) {
  const {players, fields} = game;

  const currentPlayer = players.find(player => player.index === game.currentPlayer);
  const playerFieldName = _.findKey(fields, field => _.findIndex(field.players, playerIndex => playerIndex === game.currentPlayer) !== -1);
  const playerField = game.fields[playerFieldName];

  const newFieldIndex = getPropertyByName(playerFieldName).INDEX + steps;
  const diff = newFieldIndex - 39;
  const passedStart = diff >= 0;

  const newPlayerFieldIndex = passedStart ? diff : newFieldIndex;
  const fieldProperty = getPropertyByIndex(newPlayerFieldIndex);

  const newPlayerField = game.fields[fieldProperty.NAME];

  const newCurrentPlayer = game.currentPlayer + 1;
  const currentPlayerDiff = newCurrentPlayer - game.players.length;

  return {
    ...game,
    fields: {
      ...game.fields,
      [playerFieldName]: {
        ...playerField,
        players: playerField.players.filter(playerIndex => playerIndex !== currentPlayer.index),
      },
      [fieldProperty.NAME]: {
        ...newPlayerField,
        players: [...newPlayerField.players, currentPlayer.index],
      }
    },
    players: passedStart ? addPlayerFunds(game, game.currentPlayer, gameConstants.START_BONUS).players : game.players
  };
}