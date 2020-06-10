import fieldTypes from "./fieldType";
import colors from "./colors";

export default {
  AMY_APARTMENT: {
    NAME: "Amy's apartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.GREEN,
    INDEX: 0,
    PRICE: {
      PROPERTY: 200,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  RAJ_APARTMENT: {
    NAME: "Raj's apartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.GREEN,
    INDEX: 1,
    PRICE: {
      PROPERTY: 200,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  HOWARD_SCOOTER: {
    NAME: "Howard's scooter",
    TYPE: fieldTypes.CHOO_CHOO,
    INDEX: 2,
    PRICE: {
      PROPERTY: 200,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
}