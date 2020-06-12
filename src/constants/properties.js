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
  SHELDON_OFFICE: {
    TITLE: "Sheldon's office",
    NAME: "sheldonsOffice",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.RED,
    INDEX: 21,
    PRICE: {
      PROPERTY: 220,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  FORTUNE_COOKIE_2: {
    TITLE: "Fortune cookie",
    NAME: "fortuneCookie2",
    TYPE: fieldTypes.FORTUNE_COOKIE,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 22,
  },
  HOWARD_LAB: {
    TITLE: "Howard's lab",
    NAME: "howardsLab",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.RED,
    INDEX: 23,
    PRICE: {
      PROPERTY: 220,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  LEONARD_LAB: {
    TITLE: "Leonard's lab",
    NAME: "leonardsLab",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.RED,
    INDEX: 24,
    PRICE: {
      PROPERTY: 240,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  LEONARD_CAR: {
    TITLE: "Leonard's car",
    NAME: "leonardsCar",
    TYPE: fieldTypes.CAR,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 25,
    PRICE: {
      PROPERTY: 200
    }
  },
  RAJ_OFFICE: {
    TITLE: "Raj's office",
    NAME: "rajsOffice",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.YELLOW,
    INDEX: 26,
    PRICE: {
      PROPERTY: 260,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  SHELDON_PARKING_SPACE: {
    TITLE: "Sheldon's parking space",
    NAME: "sheldonsParkingSpace",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.YELLOW,
    INDEX: 27,
    PRICE: {
      PROPERTY: 260,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  PENNY_WINE: {
    TITLE: "Penny's wine",
    NAME: "pennysWine",
    TYPE: fieldTypes.WINE,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 28,
    PRICE: {
      PROPERTY: 150
    }
  },
  PHYSICS_DEPARTMENT_CAFETERIA: {
    TITLE: "Physics department cafeteria",
    NAME: "physicsDepartmentCafeteria",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.YELLOW,
    INDEX: 29,
    PRICE: {
      PROPERTY: 280,
      HOUSE: 20,
      HOTEL: 50
    }
  },
  GO_TO_JAIL: {
    TITLE: "Go to jail",
    NAME: "goToJail",
    TYPE: fieldTypes.GO_TO_JAIL,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 30,
  },
  AMY_APARTMENT: {
    TITLE: "Amy's apartment",
    NAME: "amyApartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.GREEN,
    INDEX: 31,
    PRICE: {
      PROPERTY: 300,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  RAJ_APARTMENT: {
    TITLE: "Raj's apartment",
    NAME: "rajApartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.GREEN,
    INDEX: 32,
    PRICE: {
      PROPERTY: 300,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  ROOMATE_AGREEMENT_3: {
    TITLE: "Roomate agreement",
    NAME: "roomateAgreement3",
    TYPE: fieldTypes.ROOMATE_AGREEMENT,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 33,
  },
  HOWARD_AND_BERNADETTE_APARTMENT: {
    TITLE: "Howard and Bernadette's apartment",
    NAME: "howardAndBernadetteApartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.GREEN,
    INDEX: 34,
    PRICE: {
      PROPERTY: 320,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  HOWARD_SCOOTER: {
    TITLE: "Howard's scooter",
    NAME: "howardScooter",
    TYPE: fieldTypes.VEHICLE,
    INDEX: 35,
    PRICE: {
      PROPERTY: 200,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  FORTUNE_COOKIE_3: {
    TITLE: "Fortune cookie",
    NAME: "fortuneCookie3",
    TYPE: fieldTypes.FORTUNE_COOKIE,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 36,
  },
  PENNY_APARMENT: {
    TITLE: "Penny's apartment",
    NAME: "pennysApartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.BLUE,
    INDEX: 37,
    PRICE: {
      PROPERTY: 350,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
  BERNAETTE_RING: {
    TITLE: "Bernadette's engagement ring",
    NAME: "bernadettesEngagementRing",
    TYPE: fieldTypes.RING,
    COLOR: colors.BOARD_COLORS.WHITE,
    INDEX: 38,
    PRICE: {
      PROPERTY: 100
    }
  },
  SHELDON_AND_LEONARD_APARTMENT: {
    TITLE: "Sheldon and Leonard's apartment",
    NAME: "sheldonAndLeonardsApartment",
    TYPE: fieldTypes.PROPERTY,
    COLOR: colors.BOARD_COLORS.BLUE,
    INDEX: 39,
    PRICE: {
      PROPERTY: 400,
      HOUSE: 20,
      HOTEL: 40,
    },
  },
}