import fieldTypes from "./fieldType";
import colors from "./colors";

export default {
  START: {
    TITLE: "Collect $200 salary as you pass",
    NAME: "start",
    TYPE: fieldTypes.START,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 0,
  },
  BROKEN_ELEVATOR: {
    TITLE: "Broken elevator",
    NAME: "brokenElevator",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.BROWN,
    INDEX: 1,
    PRICE: {
      PROPERTY: 60,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  ROOMATE_AGREEMENT_1: {
    TITLE: "Roomate agreement",
    NAME: "roomateAgreement1",
    TYPE: fieldTypes.ROOMATE_AGREEMENT,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 2,
  },
  LAUNDRY_ROOM: {
    TITLE: "Laundry room",
    NAME: "laundryRoom",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.BROWN,
    INDEX: 3,
    PRICE: {
      PROPERTY: 60,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  NEW_COMIC_BOOK_DAY: {
    TITLE: "New comic book day",
    NAME: "newComicBookDay",
    TYPE: fieldTypes.BOOK,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 4,
    PRICE: {
      PROPERTY: 200,
    },
  },
  TOY_TRAIN_SET: {
    TITLE: "Toy train set",
    NAME: "toyTrainSet",
    TYPE: fieldTypes.TRAIN,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 5,
    PRICE: {
      PROPERTY: 200,
    },
  },
  NORTH_POLE_RESEARCH_STATION: {
    TITLE: "North pole research station",
    NAME: "northPoleResearchStation",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.LIGHT_BLUE,
    INDEX: 6,
    PRICE: {
      PROPERTY: 100,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  FORTUNE_COOKIE_1: {
    TITLE: "Fortune cookie",
    NAME: "fortuneCookie1",
    TYPE: fieldTypes.FORTUNE_COOKIE,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 7,
  },
  CERN_LARGE_HADRON_COLLIDER: {
    TITLE: "Cern large hadron collider",
    NAME: "cernLargeHadronCollider",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.LIGHT_BLUE,
    INDEX: 8,
    PRICE: {
      PROPERTY: 100,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  INTERNATIONAL_SPACE_STATION: {
    TITLE: "International space station",
    NAME: "internationalSpaceStation",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.LIGHT_BLUE,
    INDEX: 9,
    PRICE: {
      PROPERTY: 120,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  JAIL: {
    TITLE: "Jail",
    NAME: "jail",
    TYPE: fieldTypes.JAIL,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 10,
  },
  BERNADETTE_OFFICE: {
    TITLE: "Bernadette's office",
    NAME: "bernadettesOffice",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.PINK,
    INDEX: 11,
    PRICE: {
      PROPERTY: 140,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  SHELDON_WIFI: {
    TITLE: "Sheldon's WIFI",
    NAME: "sheldonsWifi",
    TYPE: fieldTypes.WIFI,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 12,
    PRICE: {
      PROPERTY: 150
    }
  },
  AMY_LAB: {
    TITLE: "Amy's lab",
    NAME: "amysLab",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.PINK,
    INDEX: 13,
    PRICE: {
      PROPERTY: 140,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  MRS_WOLOWITZ_HOUSE: {
    TITLE: "Mrs. Wolowitz's house",
    NAME: "mrsWolowitsHouse",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.PINK,
    INDEX: 14,
    PRICE: {
      PROPERTY: 160,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  SOYUZ_ROCKET: {
    TITLE: "Soyuz rocket",
    NAME: "soyuzRocket",
    TYPE: fieldTypes.ROCKET,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 15,
    PRICE: {
      PROPERTY: 200
    }
  },
  MODEL_TRAIN_STORE: {
    TITLE: "Model train store",
    NAME: "modelTrainStore",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.ORANGE,
    INDEX: 16,
    PRICE: {
      PROPERTY: 180,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  ROOMATE_AGREEMENT_2: {
    TITLE: "Roomate agreement",
    NAME: "roomateAgreement2",
    TYPE: fieldTypes.ROOMATE_AGREEMENT,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 17,
  },
  THE_COMIC_CENTER_OF_PASADENA: {
    TITLE: "The comic center of Pasadena",
    NAME: "theComicCenterOfPasadena",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.ORANGE,
    INDEX: 18,
    PRICE: {
      PROPERTY: 180,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  THE_CHEESECAKE_FACTORY: {
    TITLE: "The cheesecake factory",
    NAME: "theCheesecakeFactory",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.ORANGE,
    INDEX: 19,
    PRICE: {
      PROPERTY: 200,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  PARKING: {
    TITLE: "Parking",
    NAME: "parking",
    TYPE: fieldTypes.CHILL,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 20,
  },
// ----------------------------------------
//   AMY_APARTMENT: {
//     TITLE: "Amy's apartment",
//     NAME: "amyApartment",
//     TYPE: fieldTypes.PROPERTY,
//     COLOR: colors.BOARD_COLORS.GREEN,
//     INDEX: 0,
//     PRICE: {
//       PROPERTY: 200,
//       HOUSE: 20,
//       HOTEL: 40,
//     },
//   },
//   RAJ_APARTMENT: {
//     TITLE: "Raj's apartment",
//     NAME: "rajApartment",
//     TYPE: fieldTypes.PROPERTY,
//     COLOR: colors.BOARD_COLORS.GREEN,
//     INDEX: 1,
//     PRICE: {
//       PROPERTY: 200,
//       HOUSE: 20,
//       HOTEL: 40,
//     },
//   },
//   HOWARD_SCOOTER: {
//     TITLE: "Howard's scooter",
//     NAME: "howardScooter",
//     TYPE: fieldTypes.VEHICLE,
//     INDEX: 2,
//     PRICE: {
//       PROPERTY: 200,
//       HOUSE: 20,
//       HOTEL: 40,
//     },
//   },
//   HOWARD_AND_BERNADETTE_APARTMENT: {
//     TITLE: "Howard and Bernadette's apartment",
//     NAME: "howardAndBernadetteApartment",
//     TYPE: fieldTypes.PROPERTY,
//     COLOR: colors.BOARD_COLORS.GREEN,
//     INDEX: 3,
//     PRICE: {
//       PROPERTY: 200,
//       HOUSE: 20,
//       HOTEL: 40,
//     },
//   },
}