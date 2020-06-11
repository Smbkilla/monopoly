import fieldTypes from "./fieldType";
import colors from "./colors";

export default {
  AMY_APARTMENT: {
    TITLE: "Amy's apartment",
    NAME: "amyApartment",
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
    TITLE: "Raj's apartment",
    NAME: "rajApartment",
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
    TITLE: "Howard's scooter",
    NAME: "howardScooter",
    TYPE: fieldTypes.CHOO_CHOO,
    INDEX: 2,
    PRICE: {
      PROPERTY: 200,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  HOWARD_AND_BERNADETTE_APARTMENT: {
    TITLE: "Howard and Bernadette's apartment",
    NAME: "howardAndBernadetteApartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.GREEN,
    INDEX: 3,
    PRICE: {
      PROPERTY: 200,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
}