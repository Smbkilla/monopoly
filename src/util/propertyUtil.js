import _ from "lodash";

import properties from "../constants/properties";

export function getPropertyByIndex(index) {
  const propertyKey = _.findKey(properties, property => property.INDEX === index);

  return properties[propertyKey];
}
export function getPropertyByName(name) {
  const propertyKey = _.findKey(properties, property => property.NAME === name);

  return properties[propertyKey];
}