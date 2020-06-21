import _ from "lodash";
import { getPropertyByIndex, getPropertyByName } from "./propertyUtil";
import gameConstants from "../constants/game";

// add game funds
export function addGameFunds(game, amount) {
  const { parkingSpaceReward } = game;

  const newParkingSpaceReward = parkingSpaceReward + amount;

  return {
    ...game,
    parkingSpaceReward: newParkingSpaceReward,
  };
}

// remove game funds
export function removeGameFunds(game, amount) {
  const { parkingSpaceReward } = game;

  if (amount) {
    const newParkingSpaceReward = parkingSpaceReward - amount;
    if(newParkingSpaceReward > 0){
      return {
        ...game,
        parkingSpaceReward: newParkingSpaceReward,
      };
    }
    return {
      ...game,
      parkingSpaceReward: 0,
    };
  }
  return {
    ...game,
    parkingSpaceReward: 0,
  };
}

// add owner
export function addOwner(game, playerIndex, propertyName) {
  const { fields } = game;

  let newField = fields[propertyName];

  newField.owner = playerIndex;

  return {
    ...game,
    fields: {
      ...game.fields,
      propertyName: newField,
    },
  };
}

// add house
export function addHouse(game, propertyName) {
  const { fields } = game;

  let newField = fields[propertyName];

  newField.numberOfHouses++;

  return {
    ...game,
    fields: {
      ...game.fields,
      propertyName: newField,
    },
  };
}

// add hotel
export function addHotel(game, propertyName) {
  const { fields } = game;

  let newField = fields[propertyName];

  newField.numberOfHotels++;

  return {
    ...game,
    fields: {
      ...game.fields,
      propertyName: newField,
    },
  };
}

export function payAnotherPlayer(game, purchaserIndex, ownerIndex, amount) {
  const { players } = game;

  const newPlayers = players.map((player) => {
    if (player.index === purchaserIndex) {
      return {
        ...player,
        cash: player.cash - amount,
      };
    } else if (player.index === ownerIndex) {
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

export function addPlayerFunds(game, playerIndex, amount) {
  const { players } = game;

  const newPlayers = players.map((player) => {
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
  const { players } = game;

  const newPlayers = players.map((player) => {
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
  const { players, fields } = game;

  const currentPlayer = players.find(
    (player) => player.index === game.currentPlayer
  );
  const playerFieldName = _.findKey(
    fields,
    (field) =>
      _.findIndex(
        field.players,
        (playerIndex) => playerIndex === game.currentPlayer
      ) !== -1
  );
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
        players: playerField.players.filter(
          (playerIndex) => playerIndex !== currentPlayer.index
        ),
      },
      [fieldProperty.NAME]: {
        ...newPlayerField,
        players: [...newPlayerField.players, currentPlayer.index],
      },
    },
    players: passedStart
      ? addPlayerFunds(game, game.currentPlayer, gameConstants.START_BONUS)
          .players
      : game.players,
  };
}
