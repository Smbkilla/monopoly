import properties from "../constants/properties";
import playerNames from "../constants/playerName";
import playerColors from "../constants/playerColor";

export const getNewGamePlayers = (players = []) => {
  return players.map(player => ({
    ...player,
    cash: 20000000,
    properties: [],
  }))
};

export const getNewGame = () => ({
  players: [],
  fields: {
    [properties.AMY_APARTMENT.NAME]: {
      players: [
        {
          name: playerNames.AMY,
          color: playerColors.GREEN,
        },
        {
          name: playerNames.RICARDO_SHILLY_SHALLY,
          color: playerColors.GREEN,
        },
        {
          name: playerNames.BERNADETTE,
          color: playerColors.GREEN,
        },
      ],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.RAJ_APARTMENT.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.HOWARD_SCOOTER.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.HOWARD_AND_BERNADETTE_APARTMENT.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
  }
});