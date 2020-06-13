import properties from "../constants/properties";

export const getNewGamePlayers = (players = []) => {
  return players.map((player, index) => ({
    ...player,
    index,
    cash: 20000000,
    properties: [],
  }));
};

export const getNewGame = () => ({
  players: [
    {name: "Penny", color: "Blue", index: 0, cash: 20000000, properties: [properties.SHELDON_OFFICE]},
    {name: "Howard", color: "Blue", index: 1, cash: 20000000, properties: []},
  ],
  currentPlayer: 0,
  parkingSpaceReward: 0,
  fields: {
    [properties.START.NAME]: {
      players: [0],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.BROKEN_ELEVATOR.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.ROOMATE_AGREEMENT_1.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.LAUNDRY_ROOM.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.NEW_COMIC_BOOK_DAY.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.TOY_TRAIN_SET.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.NORTH_POLE_RESEARCH_STATION.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.FORTUNE_COOKIE_1.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.CERN_LARGE_HADRON_COLLIDER.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.INTERNATIONAL_SPACE_STATION.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.JAIL.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.BERNADETTE_OFFICE.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.SHELDON_WIFI.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.AMY_LAB.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.MRS_WOLOWITZ_HOUSE.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.SOYUZ_ROCKET.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.MODEL_TRAIN_STORE.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.ROOMATE_AGREEMENT_2.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.THE_COMIC_CENTER_OF_PASADENA.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.THE_CHEESECAKE_FACTORY.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.PARKING.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.SHELDON_OFFICE.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.FORTUNE_COOKIE_2.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.HOWARD_LAB.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.LEONARD_LAB.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.LEONARD_CAR.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.RAJ_OFFICE.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.SHELDON_PARKING_SPACE.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.PENNY_WINE.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.PHYSICS_DEPARTMENT_CAFETERIA.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.GO_TO_JAIL.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.AMY_APARTMENT.NAME]: {
      players: [],
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
    [properties.ROOMATE_AGREEMENT_3.NAME]: {
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
    [properties.HOWARD_SCOOTER.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.FORTUNE_COOKIE_3.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.PENNY_APARMENT.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.BERNAETTE_RING.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
    [properties.SHELDON_AND_LEONARD_APARTMENT.NAME]: {
      players: [],
      numberOfHouses: 0,
      numberOfHotels: 0,
      owner: null,
    },
  }
});