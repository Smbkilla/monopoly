import {useContext} from "react";

import _ from "lodash";

import {GameContext} from "../App";
import propertyConstants from "../constants/properties";
import useGetCurrentPlayer from "./useGetCurrentPlayer";
import useGetCurrentPlayerFieldName from "./useGetCurrentPlayerFieldName";
import {getPropertyByName} from "../util/propertyUtil";

export function useCanBuyHouse() {
  const currentPlayer = useGetCurrentPlayer();
  const {properties} = currentPlayer;
  const currentField = getPropertyByName(useGetCurrentPlayerFieldName());
  const requiredProperties = [];
  let canBuy = true;

  _.forIn(propertyConstants, value  => {
    if (value.COLOR === currentField.COLOR) {
      requiredProperties.push(value.NAME);
    }
  });

  requiredProperties.forEach(propertyName => {
      canBuy = canBuy && _.findIndex(properties, ownedProperty => ownedProperty.NAME === propertyName) !== -1;
    }
  );

  return canBuy;
}

export function useCanBuyHotel() {
  const {game: {fields}} = useContext(GameContext);
  const currentField = fields[useGetCurrentPlayerFieldName()];

  return currentField.numberOfHouses === 4;
}